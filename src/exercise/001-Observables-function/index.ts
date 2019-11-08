import { toArray } from 'rxjs/operators';
import { range } from 'rxjs';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const input6 = document.getElementById('6');

const object1 = {
  a: 'some string',
  b: 42,
  c: false,
};

// 1. Wypisz wszystkie wartości z obiektu object1
btn1.addEventListener('click', () => {});

// 2. Stwórz observable odliczające od 10 do 0
btn2.addEventListener('click', () => {});

// 3. Pobierz dane z input przy każdym naciśnięciu klawisza


/// ZADANIA PO OPERATORACH ///

// 4. Stwórz Observable który zwróci nam listę z tysiącem elementów.
btn3.addEventListener('click', () => {
  range(1, 1000)
    .pipe(toArray())
    .subscribe(console.log);
});

