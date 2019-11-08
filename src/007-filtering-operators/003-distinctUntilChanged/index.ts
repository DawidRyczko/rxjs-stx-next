import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');

btn1.addEventListener('click', () => {
  of(1, 2, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4)
    .pipe(distinctUntilChanged())
    .subscribe(console.log);
});

// Podobnie jak distinctUntil Object musi mieć tą samą referencję
btn2.addEventListener('click', () => {
  const obj = {
    id: 1,
    name: 'John',
  };
  const obj2 = {
    id: 2,
    name: 'Arthur',
  };
  const values = [obj, obj, obj2, obj];
  from(values)
    .pipe(distinctUntilChanged())
    .subscribe(console.log);
});
