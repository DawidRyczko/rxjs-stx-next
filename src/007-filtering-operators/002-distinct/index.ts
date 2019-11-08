import { from, of } from 'rxjs';
import { concatAll, distinct } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Todo } from '../../exercise/models';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');

// 1. Usuwanie duplikatów
btn1.addEventListener('click', () => {
  of(2, 3, 4, 1, 2, 1, 4, 5, 3, 2, 1, 2, 3, 4, 5, 2, 1, 1, 20, 2920, 22, 33, 4)
    .pipe(distinct())
    .subscribe(console.log);
});

// 2. Usuwanie obiektów nie zadziała
btn2.addEventListener('click', () => {
  const values = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Mikie',
    },
    {
      id: 4,
      name: 'Gerald',
    },
  ];
  from(values)
    .pipe(distinct())
    .subscribe(console.log);
});

// 3. Usuwanie tych samych referencji zadziała
btn3.addEventListener('click', () => {
  const obj1 = {
    id: 1,
    name: 'John',
  };
  const values = [
    obj1,
    obj1,
    {
      id: 2,
      name: 'Mikie',
    },
    {
      id: 4,
      name: 'Gerald',
    },
  ];
  from(values)
    .pipe(distinct())
    .subscribe(console.log);
});

// 4. Usuwanie po przez podanie selektora
btn4.addEventListener('click', () => {
  const values = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Mikie',
    },
    {
      id: 4,
      name: 'Gerald',
    },
  ];
  from(values)
    .pipe(distinct(person => person.id))
    .subscribe(console.log);
});

//// ZADANIA ///

// sprawdzić jaka jest liczba userów, którzy mają przypisane zadania
btn5.addEventListener('click', () => {
  ajax
    .getJSON<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(concatAll())
    .subscribe(console.log);
});
