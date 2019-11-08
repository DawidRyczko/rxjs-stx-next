import { from, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');

// 1 Ustala stała wartość i mapuje wszystkie wartości na tą wartość
btn1.addEventListener('click', () => {
  from([1, 2, 3, 4])
    .pipe(mapTo('Hello World!'))
    .subscribe(value => console.log(value));
});
// 2. Mapowanie eventu
fromEvent(btn2, 'click')
  .pipe(mapTo('Thx for click'))
  .subscribe(console.log);

//// ZADANIA ///

// 3. Czy tu wszystko działa dobrze z random?
btn3.addEventListener('click', () => {
  from([1, 2, 3, 4])
    .pipe(mapTo(Math.random()))
    .subscribe({
      next: console.log,
      complete: () => console.log('Complete'),
    });
});
