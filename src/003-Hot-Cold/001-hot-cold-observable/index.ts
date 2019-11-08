import { fromEvent, interval, Observable } from 'rxjs';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');

// Hot or Cold?
const obs1 = new Observable<number>(subscriber =>
  subscriber.next(Math.random())
);

btn1.addEventListener('click', ev => {
  obs1.subscribe(value => console.log('First: ', value));
  obs1.subscribe(value => console.log('Second: ', value));
});

// Hot or Cold?
const obs2 = new Observable<number>(subscriber => subscriber.next(1));

btn2.addEventListener('click', ev => {
  obs2.subscribe(value => console.log('First: ', value));
  obs2.subscribe(value => console.log('Second: ', value));
});

// Hot or Cold?
const obs3 = new Observable<number>(subscriber => {
  interval(1000).subscribe(value => subscriber.next(value));
});

btn3.addEventListener('click', ev => {
  obs3.subscribe(value => console.log('First: ', value));
  setTimeout(
    () => obs3.subscribe(value => console.log('Second: ', value)),
    2000
  );
});

// Hot or Cold?
fromEvent(btn4, 'click').subscribe(ev => console.log(ev));

// Hot or Cold?
const random = Math.random();
const obs4 = new Observable<number>(subscriber => subscriber.next(random));

btn5.addEventListener('click', ev => {
  obs4.subscribe(value => console.log('Random: ', value));
  obs4.subscribe(value => console.log('Random: ', value));
});

// Hot or Cold?
const obs5 = new Observable<number>(subscriber => subscriber.next(Math.random()));

btn6.addEventListener('click', ev => {
  obs5.subscribe(value => console.log('Random: ', value));
  obs5.subscribe(value => console.log('Random: ', value));
});
