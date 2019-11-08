import { ajax } from 'rxjs/ajax';
import { delay } from 'rxjs/operators';

export const fetchJokes = () => {
  const delayTime = Math.floor(Math.random() * 5000);
  return ajax
    .getJSON('http://api.icndb.com/jokes/random')
    .pipe(delay(delayTime));
};

export interface Person {
  name: string;
  age: number;
  job: { language?: string; position: string; exp: number };
  address: { city: string };
}

export const people: Person[] = [
  {
    name: 'Sue',
    age: 17,
    job: {
      position: 'Developer',
      language: 'Java Script',
      exp: 2,
    },
    address: {
      city: 'Poznań',
    },
  },
  {
    name: 'Joe',
    age: 19,
    job: {
      position: 'HR',
      exp: 8,
    },
    address: {
      city: 'Kraków',
    },
  },
  {
    name: 'Frank',
    age: 25,
    job: {
      position: 'HR',
      exp: 4,
    },
    address: {
      city: 'Warszawa',
    },
  },
  {
    name: 'Teemo',
    age: 27,
    job: {
      position: 'Developer',
      language: 'Java Script',
      exp: 5,
    },
    address: {
      city: 'Gdańsk',
    },
  },
  {
    name: 'Joseph',
    age: 55,
    job: {
      position: 'Scrum Master',
      language: 'Lodz',
      exp: 7,
    },
    address: {
      city: 'Kielce',
    },
  },
  {
    name: 'Cecily',
    age: 24,
    job: {
      position: 'Developer',
      language: 'Python',
      exp: 2,
    },
    address: {
      city: 'Gdańsk',
    },
  },
  {
    name: 'Jovan',
    age: 20,
    job: {
      position: 'Developer',
      language: 'Java Script',
      exp: 6,
    },
    address: {
      city: 'Piła',
    },
  },
  {
    name: 'Linoel',
    age: 31,
    job: {
      position: 'Developer',
      language: 'Python',
      exp: 5,
    },
    address: {
      city: 'Gdańsk',
    },
  },
  {
    name: 'Rufina',
    age: 22,
    job: {
      position: 'HR',
      exp: 3,
    },
    address: {
      city: 'Warszawa',
    },
  },
  {
    name: 'Leida',
    age: 23,
    job: {
      position: 'HR',
      exp: 1,
    },
    address: {
      city: 'Kraków',
    },
  },
  {
    name: 'Rona',
    age: 31,
    job: {
      position: 'Scrum Master',
      exp: 2,
    },
    address: {
      city: 'Piła',
    },
  },
  {
    name: 'Freeda',
    age: 20,
    job: {
      position: 'Developer',
      language: 'Java Script',
      exp: 1,
    },
    address: {
      city: 'Piła',
    },
  },
  {
    name: 'Tiara',
    age: 22,
    job: {
      position: 'Developer',
      language: 'Java Script',
      exp: 1,
    },
    address: {
      city: 'Warszawa',
    },
  },
  {
    name: 'Marva',
    age: 24,
    job: {
      position: 'Developer',
      language: 'Java Script',
      exp: 1,
    },
    address: {
      city: 'Kraków',
    },
  },
  {
    name: 'Dino',
    age: 24,
    job: {
      position: 'Developer',
      language: 'Python',
      exp: 1,
    },
    address: {
      city: 'Kraków',
    },
  },
];

