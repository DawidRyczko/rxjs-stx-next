import { from, fromEvent, interval, Subscription } from 'rxjs';
import { concatAll, map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');

// 1. Co zwraca i jak to naprawić?
btn1.addEventListener('click', () => {
  from([1, 2, 3, 4])
    .pipe(map(num => ajax.getJSON(`http://api.icndb.com/jokes/${num}`)))
    .subscribe(value => console.log('Result 1:', value));
});

// 2. Jak naprawić dwie subskrypcje?
btn2.addEventListener('click', () => {
  from([1, 2, 3, 4])
    .pipe(map(num => ajax.getJSON(`http://api.icndb.com/jokes/${num}`)))
    .subscribe(value =>
      value.subscribe(jokes => console.log('Result 2:', jokes)),
    );
});

// 3. Użycie concatAll
btn3.addEventListener('click', () => {
  from([1, 2, 3, 4])
    .pipe(
      map(num => ajax.getJSON(`http://api.icndb.com/jokes/${num}`)),
      concatAll(),
    )
    .subscribe(jokes => console.log('Result 3:', jokes));
});

// 4. Co w tym przypadku, gdy mamy dwie subskrypcje. Czy musimy odsubksrybowac każdą czy tylko
// zewnętrzną?
let subscription1: Subscription;
let subscription2: Subscription;

subscription1 = fromEvent(btn4, 'click')
  .pipe(map(() => interval(500)))
  .subscribe(value => {
    subscription2 = value.subscribe(console.log);
  });

fromEvent(btn5, 'click').subscribe(() => {
  subscription1.unsubscribe();
  console.log(subscription1);
  console.log(subscription2);
});

// 5. Rozwiązanie problemu
let subscription3: Subscription;
subscription3 = fromEvent(btn6, 'click')
  .pipe(mergeMap(() => interval(500)))
  .subscribe(console.log);

fromEvent(btn7, 'click').subscribe(() => {
  subscription3.unsubscribe();
});
