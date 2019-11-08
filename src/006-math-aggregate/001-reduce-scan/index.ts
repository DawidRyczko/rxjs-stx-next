import { range } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');

// 1. Reduce czeka, aż Observable zakończy się i emituje wynik
btn1.addEventListener('click', () => {
  range(1, 100)
    .pipe(reduce((acc, value) => acc + value))
    .subscribe(console.log);
});

// 2. Scan emituje kolejne wyniki na bieżąco
btn2.addEventListener('click', () => {
  range(1, 100)
    .pipe(scan((acc, value) => acc + value))
    .subscribe(console.log);
});
