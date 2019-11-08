import { fromEvent, interval } from 'rxjs';
import { delay } from 'rxjs/operators';

const btn1 = document.getElementById('1') as HTMLButtonElement;
const btn2 = document.getElementById('2') as HTMLButtonElement;
const btn3 = document.getElementById('3') as HTMLButtonElement;

// 1. Opóźnienie o 2 sekundy
fromEvent(btn1, 'click')
  .pipe(delay(2000))
  .subscribe(console.log);

// 2. Opóźnienie na podstawie daty
btn2.addEventListener('click', () => {
  const date = new Date('November 9, 2019 10:18:30');
  console.log(date);
  interval(1000)
    .pipe(delay(date))
    .subscribe(console.log);
});

/// ZADANIE ///

// 3. Wyłącz przycisk btn3 i włacz po 3 sekundach
