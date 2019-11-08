import { forkJoin, from, fromEvent, Observable, of } from 'rxjs';
import {
  concatAll,
  delay,
  exhaustMap,
  filter,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Todo, User } from '../models';

const btn1 = document.getElementById('1') as HTMLButtonElement;
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5') as HTMLButtonElement;

// 1. Po kliknięciu, button powinien być wyłaczony, opóźnij zapytanie o 3 sekundy, po otrzymaniu
// odpowiedzi włącz ponownie przycisk

fromEvent<HTMLButtonElement>(btn1, 'click')
  .pipe(
    tap(() => (btn1.disabled = true)),
    delay(2000),
    exhaustMap(evt =>
      ajax
        .getJSON('http://api.icndb.com/jokes/random')
        .pipe(tap(() => (btn1.disabled = false)))
    )
  )
  .subscribe(console.log);

// 2 Pobierze wszystkie posty dla usera o id 1, 5, 10
/// https://jsonplaceholder.typicode.com/posts


const data = forkJoin([
  ajax.getJSON<User[]>('https://jsonplaceholder.typicode.com/users'),
  ajax.getJSON<Todo>('https://jsonplaceholder.typicode.com/todos'),
]).pipe(map(response => response[0])).subscribe(console.log);




// const users: Observable<User[]> = data[0].pipe();
// users.subscribe(console.log)

fromEvent(btn2, 'click')

  .subscribe(console.log);

