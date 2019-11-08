import { fromEvent, range } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

const btn1 = document.getElementById('1') as HTMLButtonElement;
const btn2 = document.getElementById('2') as HTMLButtonElement;
const btn3 = document.getElementById('3') as HTMLButtonElement;
const btn4 = document.getElementById('4') as HTMLButtonElement;
const btn5 = document.getElementById('5') as HTMLButtonElement;

// 1. Proste logowanie za pomocą operatora tap
fromEvent(btn1, 'click')
  .pipe(tap(console.log))
  .subscribe();

// 1. Możemy także logować na property nex, error i complete
// Wywoływać funkcje spoza Observable
btn2.addEventListener('click', () => {
  range(1, 1000)
    .pipe(
      tap({
        next: x => start(x),
        complete: () => finish(),
      })
    )
    .subscribe();
});

function start(x) {
  console.log('Value: ', x);
}

function finish() {
  console.log('Finish');
}

/// ZADANIE ///

// 1. Użyj tap i wyłacz przycisk btn4 gdy przycisk zostanie kliknięty
fromEvent(btn3, 'click')
  .pipe()
  .subscribe();

