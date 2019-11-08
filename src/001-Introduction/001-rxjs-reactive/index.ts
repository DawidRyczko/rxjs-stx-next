import { fromEvent } from 'rxjs';
import { map, pluck, scan, tap } from 'rxjs/operators';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');

// Observer
const observer = { next: value => console.log(value) }; // observer

fromEvent(btn1, 'click') // tworzenie Observable
  .pipe( // operatory
    pluck('target', 'textContent'),
    tap(console.log),
    map((text: string) => text.toUpperCase())
  )
  .subscribe(observer); // subksrybcja i przekazanie observera

// Imperative style
btn2.addEventListener('click', ev => {
  const button = ev.target as HTMLButtonElement;
  console.log(button.textContent);
  const text = button.textContent.toUpperCase();
  console.log(text);
});
