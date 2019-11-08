import {
  CompletionObserver,
  ErrorObserver,
  interval,
  NextObserver,
  Observer,
  throwError,
} from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

const nextBtn = document.getElementById('next');
const errorBtn = document.getElementById('error');
const completeBtn = document.getElementById('complete');

const funcNextBtn = document.getElementById('funcNext');
const funcErrorBtn = document.getElementById('funcError');
const funcCompleteBtn = document.getElementById('funcComplete');

// Observable
const observer: Observer<number> = {
  next: (value: number) => console.log('Next: ', value),
  error: (err: any) => console.log('Error: ', err),
  complete: () => console.log('Complete!'),
};

const observerNext: NextObserver<number> = {
  next: value => console.log('Next: ', value),
};

const observerError: ErrorObserver<number> = {
  error: err => console.log('Error: ', err),
};

const observerComplete: CompletionObserver<number> = {
  complete: () => console.log('Complete!'),
};

// Przekazanie observera
nextBtn.addEventListener('click', ev => {
  interval(1000).subscribe(observer);

});

// Wywołanie błędu
errorBtn.addEventListener('click', ev => {
  interval(1000)
    .pipe(switchMap(value => throwError(`It's a trap!`)))
    .subscribe(observer);
});

// Zakończenie observable
completeBtn.addEventListener('click', ev => {
  interval(1000)
    .pipe(take(3))
    .subscribe(observer);
});

///////////////// Observer jako funkcje

// funkcja next
funcNextBtn.addEventListener('click', ev => {
  interval(1000).subscribe(value => console.log(value));
});

// Obsługa błędu
funcErrorBtn.addEventListener('click', ev => {
  interval(1000)
    .pipe(switchMap(value => throwError(`It's a trap!`)))
    .subscribe(value => console.log(value), error => console.log(error));
});

// Zakończenie
funcCompleteBtn.addEventListener('click', ev => {
  interval(1000)
    .pipe(take(3))
    .subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('Complete!'),
    );
});
