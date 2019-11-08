import {
  EMPTY,
  forkJoin,
  from,
  fromEvent,
  NEVER,
  of,
  range,
  throwError,
  zip,
} from 'rxjs';
import { catchError, delay, map, reduce, scan, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');

const obs1 = fromEvent(btn1, 'click');
const obs2 = fromEvent(btn2, 'click');
const obs3 = fromEvent(btn3, 'click');
// 1. Gdy wszystkie observable emitują wartość, zip łączy je w listę
zip(obs1, obs2, obs3).subscribe(value => console.log(value));

/// ZADANIE ////

// 2 Policz ile jest milisekund między naciśnięciem a upuszczeniem przycisku myszki
const mouseDown = fromEvent(window, 'mousedown').pipe();
const mouseUp = fromEvent(window, 'mouseup').pipe();

zip(mouseDown, mouseUp)
  .pipe()
  .subscribe(value => console.log(value));
