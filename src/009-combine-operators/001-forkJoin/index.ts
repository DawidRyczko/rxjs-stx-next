import { EMPTY, forkJoin, fromEvent, NEVER, of, range, throwError } from 'rxjs';
import { catchError, delay, reduce, scan, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');

// 1 Laczy Observable i gdy zakończą się emiwuje wartość w postaci listy
// Delay nie ma znaczenia, wszystkie muszą się zakończyć
btn1.addEventListener('click', () => {
  forkJoin([
    ajax.getJSON('https://jsonplaceholder.typicode.com/users'),
    ajax
      .getJSON('https://jsonplaceholder.typicode.com/posts')
      .pipe(delay(2000)),
  ]).subscribe(console.log);
});

// 2. Gdy pojawia się bład, Observable kończy się błędem. Nie emituje żadnego wyniku
btn2.addEventListener('click', () => {
  forkJoin([
    ajax.getJSON('https://jsonplaceholder.typicode.com/users'),
    ajax.getJSON('https://jsonplaceholder.typicode.com/postsXXXXXXXXXXX'),
  ]).subscribe(console.log);
});

//// ZADANIA /////

/// 3. Napraw tak, aby jednak otrzymać wynik z tego Observable które nie zakończyło się błędem
btn3.addEventListener('click', () => {
  forkJoin([
    ajax.getJSON('https://jsonplaceholder.typicode.com/users'),
    ajax.getJSON('https://jsonplaceholder.typicode.com/usersXXXXXXXXXXX'),
  ]).subscribe(console.log);
});

// 4 Napraw przyciski tak, aby kliknięcie w przyciski spowodowało wywołanie subskrypcji i
// wypisanie napisu
const obs1 = fromEvent(btn4, 'click');
const obs2 = fromEvent(btn5, 'click');

forkJoin([obs1, obs2]).subscribe(value => console.log('To działa!'));
