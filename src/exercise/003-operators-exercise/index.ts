import { forkJoin, from, fromEvent } from 'rxjs';
import {
  concatAll,
  delay,
  exhaustMap,
  filter,
  map,
  mergeMap,
  take,
  takeLast,
  tap,
  toArray,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { User } from '../models';

const btn1 = document.getElementById('1') as HTMLButtonElement;
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5') as HTMLButtonElement;
const input6 = document.getElementById('6') as HTMLInputElement;

// 1. Po kliknięciu, button powinien być wyłaczony, opóźnij zapytanie o 3 sekundy, po otrzymaniu
// odpowiedzi włącz ponownie przycisk


// 2. Użyj fromEvent klikając pobierz userów
// wyświetl tylko jednego user z id===5
// https://jsonplaceholder.typicode.com/users

// 3. Użyj fromEvent na przycisku. Klikając pobierz userów i pozwól to zrobić tylko raz
// https://jsonplaceholder.typicode.com/users


// 4. Użyj fromEvent. Pobierz userów, potem weź id z ostatnich 4 pozycji
// https://jsonplaceholder.typicode.com/users
// Pobierz dla każdego id zadania
// `https://jsonplaceholder.typicode.com/todos/?userId=${id}`


