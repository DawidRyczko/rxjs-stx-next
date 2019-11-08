import { fromEvent } from 'rxjs';
import { concatAll, map, pluck, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { User } from '../../exercise/models';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');

// !. Pluck wyciąga wartość nawet z bardzo zagnieżdżonych property
fromEvent(btn1, 'click')
  .pipe(
    tap(evt => console.log(evt)),
    pluck('target', 'textContent')
  )
  .subscribe(console.log);

// 1. Z pobranej listy Userów pobierz tylko nazwę firmy i zmień nazwy na duże liter
btn2.addEventListener('click', () => {
  ajax
    .getJSON<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe()
    .subscribe(console.log);
});
