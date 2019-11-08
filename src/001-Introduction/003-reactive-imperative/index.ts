import { Subject } from 'rxjs';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');

btn1.addEventListener('click', () => imperativeArray.push(100));
btn2.addEventListener('click', () => reactiveArray.next(100));

/////////////// Imperative
const imperativeArray = [];
imperativeArray.push(1);
imperativeArray.push(2);

printImperative();

imperativeArray.push(3);
imperativeArray.push(4);

function printImperative() {
  imperativeArray.forEach(value => console.log('Imperative: ', value));
}


//////////////// Reactive
const reactiveArray = new Subject(); // tworzenie Observable
reactiveArray.next(1);
reactiveArray.next(2);

printReactive();

reactiveArray.next(3);
reactiveArray.next(4);

function printReactive() {
  reactiveArray.subscribe(value => console.log('Reactive: ', value));
}
