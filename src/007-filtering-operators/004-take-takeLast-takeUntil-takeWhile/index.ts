import { take, takeLast, takeUntil, takeWhile } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');

// 1. take
btn1.addEventListener('click', () => {
  interval(10)
    .pipe(take(100))
    .subscribe(console.log);
});

// 2. takeLast
btn2.addEventListener('click', () => {
  interval(10)
    .pipe(
      take(200),
      takeLast(100),
    )
    .subscribe(console.log);
});

// 3. takeUntil uruchamia się na podstawie dodatkowego observable
const stopBtn = fromEvent(btn4, 'click');
btn3.addEventListener('click', () => {
  interval(10)
    .pipe(takeUntil(stopBtn))
    .subscribe(console.log);
});

// 3. takeUntil uruchamia się na podstawie dodatkowego observable
btn5.addEventListener('click', () => {
  interval(10)
    .pipe(takeWhile(x => x < 100))
    .subscribe(console.log);
});


