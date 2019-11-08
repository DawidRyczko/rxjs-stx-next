import { from, of, range } from 'rxjs';
import { count, filter, map, max, min, reduce, scan } from 'rxjs/operators';
import { people, Person } from '../../exercise/helpers';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');

// Maxymalna liczba podzielna prez 66
btn1.addEventListener('click', () => {
  range(1, 1000)
    .pipe(
      filter(value => value % 66 === 0),
      max()
    )
    .subscribe(console.log);
});

// Kto ma najniższy wiek
btn2.addEventListener('click', () => {
  from(people)
    .pipe(max((a: Person, b: Person) => (a.age > b.age ? -1 : 1)))
    .subscribe(console.log);
});

// Count - ile jest liczb podzielnych przez 66
btn3.addEventListener('click', () => {
  range(1, 1000)
    .pipe(count(value => value % 66 === 0))
    .subscribe(console.log);
});
