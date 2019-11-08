import { fromEvent, interval } from 'rxjs';
import { map, switchAll, switchMap, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { fetchJokes } from '../../exercise/helpers';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');

// 1. switchAll - raz jeden raz drugi Observable na wzajem usuwają swoje subskrypcje
btn1.addEventListener('click', () => {
  const obs1 = interval(2000).pipe(tap((x) => console.log('First', x)));
  const obs2 = interval(500);
  const obs = obs1.pipe(map(() => obs2));
  obs.pipe(switchAll()).subscribe(console.log);
});

// 6 użyliśmy funkcji map, powstało Higher-Order Observable
// Każde kolejne kliknięcie anauluje subskrypcję i powstaje nowa
const clicks = fromEvent(btn2, 'click');
const higherOrder = clicks.pipe(
  map(() => ajax.getJSON('http://api.icndb.com/jokes/random')),
);
higherOrder.pipe(switchAll()).subscribe(console.log);


// 8 switchMap usuwa wcześniejszą subskrypję gdy pojawi się nowy Observable
fromEvent(btn3, 'click')
  .pipe(switchMap(() => fetchJokes()))
  .subscribe(console.log);

