import { fromEvent, Observable, Subscriber } from 'rxjs';
import { map, pluck, scan } from 'rxjs/operators';

const firstBtn = document.getElementById('first');
const secondBtn = document.getElementById('second');

const customObservable = new Observable((subscriber: Subscriber<number>) => {
  let count = 0;
  setInterval(() => {
    subscriber.next(++count);
  }, 1000);
});

// const customObservable = new Observable((subscriber: Subscriber<number>) => {
//   let count = 0;
//   setInterval(() => {
//     if(count === 5){
//       subscriber.error(new Error('Enough! You waste my time!'))
//     }
//     subscriber.next(++count);
//   }, 1000);
// });

// const customObservable = new Observable((subscriber: Subscriber<number>) => {
//   let count = 0;
//   setInterval(() => {
//     if(count === 5){
//       subscriber.complete()
//     }
//     subscriber.next(++count);
//   }, 1000);
// });

// const customObservable = new Observable((subscriber: Subscriber<number>) => {
//   let count = 0;
//   const id = setInterval(() => {
//     console.log('From Observable', count);
//     if (count === 5) {
//       subscriber.complete();
//     }
//     subscriber.next(++count);
//   }, 1000);
//   // return () => clearInterval(id);
// });

firstBtn.addEventListener('click', ev => {
  customObservable.subscribe(value => console.log('First: ', value));
});

secondBtn.addEventListener('click', ev => {
  customObservable.subscribe(value => console.log('Second: ', value));
});
