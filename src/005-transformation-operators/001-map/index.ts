import { from, fromEvent, of } from 'rxjs';
import { concatAll, map, mergeMap, toArray } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { User } from '../../exercise/models';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');

// 1. Map transformuje każdą wartość
btn1.addEventListener('click', () => {
  from([1, 2, 3, 4])
    .pipe(map(num => num * 2))
    .subscribe(value => console.log(value));
});

// 2. Jak pomnożyć wynik w takim przypadku??
// uzycie wewnętrzenj funkcji
btn2.addEventListener('click', () => {
  of([1, 2, 3, 4])
    .pipe(map(arr => arr.map(value => value * 2)))
    .subscribe(value => console.log(value));
});

// 3. inne rozwiązanie
btn3.addEventListener('click', () => {
  of([1, 2, 3, 4])
    .pipe(
      concatAll(),
      map(num => num * 2),
      toArray()
    )
    .subscribe(value => console.log(value));
});

// 4. Jak pomnożyć każdą liczbę przez 2 w takiej strukturze?
// dwa rozwiązania
btn4.addEventListener('click', () => {
  of([1, 2, 3, 4], [100, 200, 300, 400])
    .pipe(
      map(value => from(value)),
      mergeMap(
        value =>
          value.pipe(
            map(value1 => value1 * 2),
            toArray()
          )
        // map(arr => arr.map(value => value * 2)),
      )
    )
    .subscribe(console.log);
});

// 5. Jak pomnożyć listę list?
btn5.addEventListener('click', () => {
  of([[1, 2, 3, 4], [100, 200, 300, 400]])
    .pipe(
      concatAll(),
      map(arr => arr.map(value => value * 2)),
      toArray()
    )
    .subscribe(console.log);
});

/// ZADANIA ///

// 6. Pobierz współrzędne kliknięcia do listy
fromEvent<MouseEvent>(document, 'click')
  .pipe(map(evt => [evt.x, evt.y]))
  .subscribe(console.log);

// 7. Pobierz userów i wyświetl tylko ich imiona
btn6.addEventListener('click', () => {
  ajax
    .getJSON<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      concatAll(),
      map(res => res.name)
    )
    .subscribe(console.log);
});

// 7. Pobierz userów i imiona i miasto jako obiekty w liście
btn7.addEventListener('click', () => {
  ajax
    .getJSON<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      concatAll(),
      map(res => ({
        name: res.name,
        city: res.address.city,
      })),
      toArray()
    )
    .subscribe(console.log);
});
