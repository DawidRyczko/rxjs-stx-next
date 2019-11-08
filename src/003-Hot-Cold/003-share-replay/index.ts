import { interval } from 'rxjs';
import { publish, publishLast, publishReplay, refCount, share } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');

// 1. Share działa podobnie jak publish i refCount
const obs1 = interval(1000).pipe(share());

btn1.addEventListener('click', ev => {
  obs1.subscribe(value => console.log('First: ', value));
  obs1.subscribe(value => console.log('Second: ', value));
});

// 2. Share przy zapytaniu http wykonuje jedno połączenie nawet jak ma więcej subskrybentów
// Sprawdź shareReplay(1)
const obs2 = ajax.getJSON('http://api.icndb.com/jokes/random').pipe(
  // shareReplay(1),
  share(),
);

btn2.addEventListener('click', ev => {
  obs2.subscribe(value => console.log('First: ', value));
  obs2.subscribe(value => console.log('Second: ', value));
});

btn3.addEventListener('click', ev => {
  obs2.subscribe(value => console.log('Retry: ', value), null, () =>
    console.log('Complete'),
  );
});

// 3. publish i refCount, zamyka Observable i nie można wykonać ponownego połaczenia
// sprawdź publishReplay(1)
const obs3 = ajax.getJSON('http://api.icndb.com/jokes/random').pipe(
  // publishReplay(1)
  // publishLast(1)
  publish(),
  refCount(),
);

btn4.addEventListener('click', ev => {
  obs3.subscribe(value => console.log('First: ', value));
  obs3.subscribe(value => console.log('First: ', value));
});

btn5.addEventListener('click', ev => {
  obs3.subscribe(value => console.log('Retry: ', value), null, () =>
    console.log('Complete'),
  );
});
