import { fromEvent, interval, merge, Observable, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { fetchJokes } from '../../exercise/helpers';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');

// 1. Merge i delay
btn1.addEventListener('click', () => {
  const obs1 = of(1, 2, 3).pipe(delay(2000));
  const obs2 = of(4, 5, 6).pipe();
  const obs3 = of('seven', 'eight', 'nine');
  merge(obs1, obs2, obs3).subscribe(console.log);
});

// 2. przekazanie listy
btn2.addEventListener('click', () => {
  const obs1 = of(1, 2, 3).pipe(delay(2000));
  const obs2 = of(4, 5, 6);
  const obs3 = of('seven', 'eight', 'nine');

  const arr: Observable<number | string>[] = [obs1, obs2, obs3];
  merge(...arr).subscribe(console.log);
});

// 3. pusty od razu jest complete
btn3.addEventListener('click', () => {
  merge([]).subscribe({
    complete: () => console.log('Complete'),
  });
});

// 4. Observables nie muszą byc zakonczone, aby nastepny byl subskrybowany
btn4.addEventListener('click', () => {
  const obs1 = interval(1000);
  const obs2 = interval(2000);
  merge(obs1, obs2).subscribe(console.log);
});

// 5. Laczenie zapytan HTTP
btn5.addEventListener('click', () => {
  const obs1 = ajax.getJSON('http://api.icndb.com/jokes/random');
  const obs2 = ajax.getJSON('http://api.icndb.com/jokes/random');
  merge(obs1, obs2).subscribe(console.log);
});

// 6 użyliśmy funkcji map, powstało Higher-Order Observable
// Musimy spłaszczyć strukturę przez mergeMap
const clicks = fromEvent(btn6, 'click');
const higherOrder = clicks.pipe(
  map(() => ajax.getJSON('http://api.icndb.com/jokes/random')),
);
higherOrder.pipe(mergeAll()).subscribe(console.log);

// 7 mergeMap
fromEvent(btn7, 'click')
  .pipe(mergeMap(() => ajax.getJSON('http://api.icndb.com/jokes/random')))
  .subscribe(console.log);

// 8 mergeMap order is not important
fromEvent(btn8, 'click')
  .pipe(
    mergeMap(() => fetchJokes()),
  )
  .subscribe(console.log);
