import { Observable } from 'rxjs';

const promise = new Promise((resolve, reject) => {
  console.log('Hello World from promise');
  resolve('Resolve function from promise');
});

console.log('Promise are eager');

promise.then(res => console.log(res));

console.log('');

const hello = new Observable(observer => {
  console.log('Hello World from observable');
  observer.next('Next function from observable');
  observer.complete();
});

console.log('Observable are lazy');
hello.subscribe(val => console.log(val));
