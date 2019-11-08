import { fromEvent, interval, of, range } from 'rxjs';
import { delay, tap, timeInterval, timestamp, toArray } from 'rxjs/operators';

const btn1 = document.getElementById('1') as HTMLButtonElement;
const btn2 = document.getElementById('2') as HTMLButtonElement;

// 1. Kolekcjionuje wartości do listy gdy observable się zakończy
btn1.addEventListener('click', () => {
  of(1, 2, 3, 4, 5)
    .pipe(toArray())
    .subscribe(console.log);
});

// 2.
btn2.addEventListener('click', () => {
  range(1, 100)
    .pipe(toArray())
    .subscribe(console.log);
});
