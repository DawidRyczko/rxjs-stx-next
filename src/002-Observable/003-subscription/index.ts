import { fromEvent, interval, Subject, Subscription, throwError } from 'rxjs';
import { switchMap, take, takeUntil, tap } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btn10 = document.getElementById('10');
const btn11 = document.getElementById('11');
const btn12 = document.getElementById('12');
const btn13 = document.getElementById('13');
const btn14 = document.getElementById('14');

// Usuwanie pojedynczej subskrypcji
let singleSubscription: Subscription;

btn1.addEventListener('click', ev => {
  singleSubscription = interval(1000).subscribe(value => console.log(value));
});

btn2.addEventListener('click', ev => {
  console.log(singleSubscription);
  singleSubscription.unsubscribe();
  console.log(singleSubscription);
});

// Usuwanie subskrypcji z użyciem listy
const multipleSubscription: Subscription[] = [];

btn3.addEventListener('click', ev => {
  const sub1 = interval(1000).subscribe(value => console.log('First: ', value));
  const sub2 = interval(1000).subscribe(value =>
    console.log('Second: ', value)
  );
  const sub3 = interval(1000).subscribe(value => console.log('Third: ', value));
  multipleSubscription.push(sub1, sub2, sub3);
});

btn4.addEventListener('click', ev => {
  multipleSubscription.forEach(sub => sub.unsubscribe());
});

// Wykorzystanie metody add() w obiekcie Subscription
const subscriptions = new Subscription();

btn5.addEventListener('click', ev => {
  const sub1 = interval(1000).subscribe(value =>
    console.log('First add: ', value)
  );
  const sub2 = interval(1000).subscribe(value =>
    console.log('Second add: ', value)
  );
  const sub3 = interval(1000).subscribe(value =>
    console.log('Third add: ', value)
  );
  subscriptions.add(sub1);
  subscriptions.add(sub2);
  subscriptions.add(sub3);
});

btn6.addEventListener('click', ev => {
  subscriptions.unsubscribe();
});

// Użycie take(), takeWhile(), first()
let takeSubscription: Subscription;

btn7.addEventListener('click', ev => {
  takeSubscription = interval(1000)
    .pipe(take(2))
    .subscribe(value => console.log(value));
  console.log(takeSubscription);
});

btn8.addEventListener('click', ev => {
  console.log('Check: ', takeSubscription);
});

// Its a trap!
let trapSubscription: Subscription;

trapSubscription = fromEvent(btn9, 'click')
  .pipe(take(2))
  .subscribe(() => console.log('Clicked'));

btn10.addEventListener('click', ev => {
  console.log('Check: ', trapSubscription);
});

// Rozwiązanie z dodatkowym Observable
const subject = new Subject<void>();

btn11.addEventListener('click', ev => {
  interval(1000)
    .pipe(takeUntil(subject))
    .subscribe(value => console.log(value));
});

btn12.addEventListener('click', ev => {
  subject.next();
  subject.complete();
});

//  Error
let errorSubscription: Subscription;

errorSubscription = fromEvent(btn13, 'click')
  .pipe(
    tap(() => console.log(errorSubscription)),
    switchMap(() => throwError(new Error('Click' + ' error')))
  )
  .subscribe(() => console.log('Clicked'));

btn14.addEventListener('click', ev => {
  console.log('Check: ', errorSubscription);
});
