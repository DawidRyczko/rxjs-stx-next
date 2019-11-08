import { from, Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Imperative
function imperative(arr: number[]): number[] {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] * 2);
  }
  return results;
}
const result = imperative(numbers);
console.log('Imperative', result);



// Declarative
function declarative(arr: number[]): number[] {
  return arr.map(item => item * 2);
}
console.log('Declarative', declarative(numbers));



// Reactive
function reactive(arr: number[]): Observable<number[]> {
  return from(arr).pipe(
    map(item => item * 2),
    toArray()
  );
}
reactive(numbers).subscribe(value => console.log('Reactive', value));
