import { fromEvent, interval, of, range } from 'rxjs';
import { delay, repeat, tap, timeInterval, timestamp, toArray } from 'rxjs/operators';

const btn1 = document.getElementById('1') as HTMLButtonElement;
const btn2 = document.getElementById('2') as HTMLButtonElement;

// 1. Emituje jeszcze raz wszystkie wartości określoną ilość razy
btn1.addEventListener('click', () => {
  of('Hello World!')
    .pipe(repeat(5))
    .subscribe(console.log);
});
