import { Observable, Subscriber } from 'rxjs';

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');


interface Jokes {
  type: string;
  value: {
    id: number;
    categories: string[];
    joke: string;
  };
}

// Stwórz Observable, które będzie emitowało żart co 3 sekundy
// url: http://api.icndb.com/jokes/random
const customObservable = new Observable((subscriber: Subscriber<string>) => {
  // uzupełnij
});
