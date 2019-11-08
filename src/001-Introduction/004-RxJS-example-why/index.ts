import { fromEvent } from 'rxjs';
import { scan, throttleTime } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');

// 1. State - Zliczanie kliknięć na przycisku

btn1.addEventListener('click', () => {

});

// Rozwiązanie reaktywne
fromEvent(btn2, 'click')
  .pipe(
    // dopisz brakujący operator
  )
  .subscribe(count => console.log('Clicked: ', count));

////////////////////////

/// 2. Flow control - ogranicz klikanie raz na sekundę

btn3.addEventListener('click', () => {

});

// Roziązanie reaktywne
fromEvent(btn4, 'click')
  .pipe(
    // dopisz brakujący operator
  )
  .subscribe(() => console.log('Clicked after 1s'));
