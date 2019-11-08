import { fromEvent, interval } from 'rxjs';
import { exhaust, exhaustMap, map, take, tap } from 'rxjs/operators';
import { fetchJokes } from '../../exercise/helpers';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');

// 1. exhaust - następne kliknięcie bęzie obsłużone gdy zakończy się observable interval
fromEvent(btn1, 'click')
  .pipe(map(() => interval(500).pipe(take(5))))
  .pipe(exhaust())
  .subscribe(x => console.log(x));

// 2. Co sekundę powinien rozpocząć się drugi interval,
// ale
btn2.addEventListener('click', () => {
  const obs1 = interval(1000).pipe(
    tap(x => console.log('First', x)),
  );
  const obs2 = interval(500).pipe(take(10));
  const obs = obs1.pipe(map(() => obs2));
  obs.pipe(exhaust()).subscribe(console.log);
});

// 8 exhaustMap ignoruje kolejne Observable dopóki nie zakończy wcześniejszego
fromEvent(btn3, 'click')
  .pipe(exhaustMap(() => fetchJokes()))
  .subscribe(console.log);
