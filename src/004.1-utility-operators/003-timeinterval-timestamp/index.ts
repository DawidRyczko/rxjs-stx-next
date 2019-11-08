import { fromEvent, interval } from 'rxjs';
import { delay, timeInterval, timestamp } from 'rxjs/operators';

const btn1 = document.getElementById('1') as HTMLButtonElement;
const btn2 = document.getElementById('2') as HTMLButtonElement;
const btn3 = document.getElementById('3') as HTMLButtonElement;


// 1. Mierzy czas między eventami
fromEvent(btn1, 'click').pipe(
  timeInterval()
).subscribe(console.log);


// 1. Mierzy dokładny eventu
fromEvent(btn2, 'click').pipe(
  timestamp()
).subscribe(console.log);


