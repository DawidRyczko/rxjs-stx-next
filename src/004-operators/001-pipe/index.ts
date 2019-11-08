import { pipe, range } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');

// Użycie pipe z operatorami
btn1.addEventListener('click', () => {
  range(1, 10)
    .pipe(
      filter(x => x % 2 === 1),
      map(x => x * 2),
      startWith('Doubled even numbers: '),
    )
    .subscribe(console.log);
});

// Użycie pipe z funkcjami
const even = filter((x: number) => x % 2 === 1);
const double = map((x: number) => x * 2);
const description = startWith('Doubled even numbers: ');
btn2.addEventListener('click', () => {
  range(1, 10)
    .pipe(
      even,
      double,
      description,
    )
    .subscribe(console.log);
});

// Wykorzystanie funkcji pipe, nie metody
const transformNumbers = pipe(
  filter((x: number) => x % 2 === 1),
  map((x: number) => x * 2),
  startWith('Doubled even numbers: '),
);

btn3.addEventListener('click', () => {
  range(1, 10)
    .pipe(transformNumbers)
    .subscribe(console.log);
});

btn3.addEventListener('click', () => {
  transformNumbers(range(1, 10)).subscribe(console.log);
});
