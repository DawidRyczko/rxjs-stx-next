import { generate, interval } from 'rxjs';
import { count, tap, toArray } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');

// Dlaczego toArray nie działa na tym Observable?
btn1.addEventListener('click', () => {
  interval(1000)
    .pipe(
      tap(x => console.log('x: ', x)),
      toArray(),
    )
    .subscribe(value => console.log(value));
});

// Dlaczego nie można zliczyć ilości elementów?
btn2.addEventListener('click', () => {
  generate(1, x => x > 0, x => x + 1)
    .pipe(
      tap(x => console.log('x: ', x)),
      count(),
    )
    .subscribe(value => console.log(value));
});
