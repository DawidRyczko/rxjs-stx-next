import { from, partition } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Todo } from '../../exercise/models';
import { concatAll } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');

const people = [
  {
    name: 'Sue',
    age: 17,
  },
  {
    name: 'Joe',
    age: 19,
  },
  {
    name: 'Frank',
    age: 25,
  },
  {
    name: 'John',
    age: 34,
  },
  {
    name: 'Miki',
    age: 22,
  },
  {
    name: 'Alba',
    age: 11,
  },
  {
    name: 'Naili',
    age: 45,
  },
  {
    name: 'Tarin',
    age: 4,
  },
];

const persons = from(people);
const [adult, others] = partition(persons, value => value.age >= 18);

btn1.addEventListener('click', () => {
  adult.subscribe(value => console.log('Adult: ', value));
});

btn2.addEventListener('click', () => {
  others.subscribe(value => console.log('Others: ', value));
});

/// ZADANIA ///
// Użyj partition i pobierze zadania, podziel je na wykonane i niewykonane.
const todos = ajax.getJSON('https://jsonplaceholder.typicode.com/todos');
const [done, notDone] = partition<Todo>(todos, null);

btn3.addEventListener('click', () => {
  done.subscribe(console.log);
});

btn4.addEventListener('click', () => {
  notDone.subscribe(console.log);
});
