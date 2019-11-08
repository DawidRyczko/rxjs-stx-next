import { concatAll, count, filter, find, first, last, skip, take, toArray } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Todo } from '../../exercise/models';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');

// 1. filter
btn1.addEventListener('click', () => {
  ajax.getJSON<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      concatAll(),
      filter(todo => todo.completed),
      toArray(),
    )
    .subscribe(console.log);
});

// 2. finc
btn2.addEventListener('click', () => {
  ajax.getJSON<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      concatAll(),
      find(todo => todo.userId === 10),
    )
    .subscribe(console.log);
});


// 3. first
btn3.addEventListener('click', () => {
  ajax.getJSON<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      concatAll(),
      first(),
    )
    .subscribe(console.log);
});

// 4. last
btn4.addEventListener('click', () => {
  ajax.getJSON<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      concatAll(),
      last(),
    )
    .subscribe(console.log);

});

// 5. take
btn5.addEventListener('click', () => {
  ajax.getJSON<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      concatAll(),
      filter(todo => todo.userId === 10),
      take(3),
    )
    .subscribe(console.log);
});

// 6. skip
btn6.addEventListener('click', () => {
  ajax.getJSON<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      concatAll(),
      filter(todo => todo.userId === 10),
      skip(3),
    )
    .subscribe(console.log);
});

// ZADANIA ///

// 7. Policz ile zadan zakonczonych ma user
btn7.addEventListener('click', () => {
  ajax.getJSON<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      concatAll(),
      filter(todo => todo.completed === true),
      count(todo => todo.userId === 10),
    )
    .subscribe(console.log);
});
