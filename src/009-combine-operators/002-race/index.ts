import { combineLatest, fromEvent, interval, race, range, timer } from 'rxjs';
import {
  combineAll,
  debounceTime,
  delay,
  filter,
  map,
  mapTo,
  repeat,
  take,
  throttle,
  throttleTime,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');

// 1. Subskrybuje do pierwszego Observable, który wyemituje swoją wartość.
btn1.addEventListener('click', () => {
  const obs1 = ajax.getJSON('https://jsonplaceholder.typicode.com/posts/1');
  const obs2 = ajax.getJSON('https://jsonplaceholder.typicode.com/posts/2');
  const obs3 = ajax.getJSON('https://jsonplaceholder.typicode.com/posts/3');
  race(obs3, obs1, obs2).subscribe({
    next: winner => console.log(winner),
    complete: () => console.log('Complete'),
  });
});

// 2. Jeżeli przekazane Observable nie kończy się, również race nie zakonczy się
btn2.addEventListener('click', () => {
  const obs1 = interval(1000).pipe(mapTo('long'));
  const obs2 = interval(500).pipe(mapTo('short'));
  race(obs1, obs2).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete'),
  });
});

// 3 Stwórz grę, która sprawdzi, kto szybciej nacisnął Spację lub Enter
// Gra musi się wznawia, aby móc zagrać ponownie

const enter = fromEvent<KeyboardEvent>(window, 'keypress')
  // uzupełnij
  .pipe();

const space = fromEvent<KeyboardEvent>(window, 'keypress')
  // uzupełnij pipe
  .pipe();

race(enter, space)
  // uzupełnij pipe
  .pipe()
  .subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete'),
  });
