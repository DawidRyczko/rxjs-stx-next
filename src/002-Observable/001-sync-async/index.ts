import { asyncScheduler, interval, of, range } from 'rxjs';
import { observeOn, take } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');

// Sync
btn1.addEventListener('click', () => {
  console.log('Start');
  range(1, 10).subscribe(value => console.log('Observable 1: ', value));
  console.log('Stop');
});

// Aync interval z naturay asynchorniczne
btn2.addEventListener('click', () => {
  console.log('Start');
  interval(1000)
    .pipe(take(10))
    .subscribe(value => console.log('Observable 1: ', value));
  console.log('Stop');
});

// Aync range z dodatkowym asyncScheduler
btn3.addEventListener('click', () => {
  console.log('Start');
  range(1, 10)
    .pipe(observeOn(asyncScheduler))
    .subscribe(value => console.log('Observable 1: ', value));
  console.log('Stop');
});
