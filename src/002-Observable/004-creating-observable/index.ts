import {
  defer,
  EMPTY,
  from,
  fromEvent,
  generate,
  interval,
  NEVER,
  of,
  range,
  throwError,
  timer,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/internal-compatibility';

const ofBtn = document.getElementById('of');
const fromBtn = document.getElementById('from');
const emptyBtn = document.getElementById('empty');
const neverBtn = document.getElementById('never');
const errorBtn = document.getElementById('error');
const deferBtn = document.getElementById('defer');
const generateBtn = document.getElementById('generate');
const rangeBtn = document.getElementById('range');
const intervalBtn = document.getElementById('interval');
const timerBtn = document.getElementById('timer');
const ajaxBtn = document.getElementById('ajax');

// of
ofBtn.addEventListener('click', () => {
  const subscription = of(1, 2, 3, 4, 5, 6, 7, 8, 9).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete!'),
  });
  console.log(subscription);
});

// from
fromBtn.addEventListener('click', () => {
  const subscription = from([1, 2, 3, 4, 5, 6, 7, 8, 9]).subscribe(console.log);
  // from('hello').subscribe(console.log);
  // from(people).subscribe(console.log);
  console.log(subscription);
});

// EMPTY
emptyBtn.addEventListener('click', () => {
  EMPTY.subscribe({ complete: () => console.log('Empty completed') });

  // const error = throwError(new Error('Some error'));
  // error
  //   .pipe(
  //     catchError(err => {
  //       console.log(err);
  //       return EMPTY;
  //     })
  //   )
  //   .subscribe({
  //     complete: () => console.log('Complete'),
  //   });
});

// NEVER
neverBtn.addEventListener('click', () => {
  const subscription = NEVER.subscribe({
    complete: () => console.log('Never completed'),
  });
  console.log(subscription);
});

// throwError
errorBtn.addEventListener('click', () => {
  throwError(new Error('Error!')).subscribe({
    error: err => console.log(err),
  });

  // const subscription = of(1, 2, 4, 'x', 5)
  //   .pipe(
  //     switchMap(x => (isNumeric(x) ? of(x) : throwError('It is not a Number!')))
  //   )
  //   .subscribe({
  //     next: value => console.log(value),
  //     error: err => console.log(err),
  //   });
  // console.log(subscription);
});

// defer
const t1 = of(new Date());
const t2 = defer(() => of(new Date()));
deferBtn.addEventListener('click', () => {
  const obs1 = defer(() =>
    Math.random() > 0.5 ? throwError(new Error('ha ha ha')) : of('boo'),
  );
  obs1.subscribe(console.log);
  obs1.subscribe(console.log);

  // const obs2 = defer(()=> Math.random() > 0.5 ? interval(500) : of('boo'));
  // obs2.subscribe(console.log);
  // obs2.subscribe(console.log);

  t1.subscribe(console.log);
  t2.subscribe(console.log);
});

// generate
generateBtn.addEventListener('click', () => {
  generate(0, x => x <= 100, x => x + 2).subscribe(console.log);

  // generate(0, x => x <= 10, x => x + 1, x => 'foo'.repeat(x)).subscribe(
  //   console.log
  // );
});

// range
rangeBtn.addEventListener('click', () => {
  range(100, 11).subscribe(console.log);
});

// interval
intervalBtn.addEventListener('click', () => {
  interval(1000).subscribe(console.log);
  // interval(1000).pipe(take(5)).subscribe(console.log);
});

// timer
timerBtn.addEventListener('click', () => {
  timer(5000, 1000).subscribe(x => console.log(x));
  // timer(2000).subscribe({
  //   next: value => console.log(value),
  //   complete: () => console.log("Complete")
  // });
});

// fromEvent
const fromEventBtn = document.getElementById('fromEvent');
const subscription = fromEvent(fromEventBtn, 'click').subscribe(() => {
    console.log('Click from Observable');
    console.log(subscription);
  },
);

// ajax
ajaxBtn.addEventListener('click', () => {
  // zwraca cały obiekt odpowiedzi
  ajax('https://jsonplaceholder.typicode.com/posts/1').subscribe(console.log);

  // zwraca tylko obiekt JSON
  ajax
    .getJSON('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(console.log);

  // wykonanie zapytania POST
  const users = ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  })
    .pipe(map(res => res.response))
    .subscribe(console.log);
});
