import { interval, range } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');

// 1. Cold to Hot // Dlaczego to nie działa?
const obs1 = range(1, 5).pipe(publish());

// @ts-ignore
obs1.connect();

btn1.addEventListener('click', ev => {
  obs1.subscribe(value => console.log('First: ', value));
  obs1.subscribe(value => console.log('Second: ', value));
});

// 2. Nieskończone Hot Observable z publish. Ten Observable uruchamia się natychmiast.
const obs2 = interval(1000).pipe(publish());

// @ts-ignore
obs2.connect();

btn2.addEventListener('click', ev => {
  setInterval(() => {
    obs2.subscribe(value => console.log('First: ', value));
    obs2.subscribe(value => console.log('Second: ', value));
  }, 3000);
});

// 3. Publish z refCount. Ten Observable uruchamia się dopiero przy pierwzej subskrypcji
const obs3 = interval(1000).pipe(
  publish(),
  refCount()
);

btn3.addEventListener('click', ev => {
  setInterval(() => {
    obs3.subscribe(value => console.log('First: ', value));
    obs3.subscribe(value => console.log('Second: ', value));
  }, 3000);
});
