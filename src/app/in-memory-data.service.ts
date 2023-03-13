import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr. Nice', power:0, ability:"Nothing", ability2:"-" },
      { id: 2, name: 'Bombasto', power:75, ability:"Fire Blast", ability2:"-" },
      { id: 3, name: 'Celeritas', power:11, ability:"Speed", ability2:"-" },
      { id: 4, name: 'Magneta', power:84, ability:"Magnetism", ability2:"-" },
      { id: 5, name: 'RubberMan', power:13, ability:"Elasticity", ability2:"Strength" },
      { id: 6, name: 'Dynama', power:30, ability:"Electricity", ability2:"Speed" },
      { id: 7, name: 'Dr. IQ', power:18, ability:"High IQ", ability2:"Technology" },
      { id: 8, name: 'Magma', power:66, ability:"Fire Blast", ability2:"-" },
      { id: 9, name: 'Tornado', power:84, ability:"Fly", ability2:"Weather" },
      { id: 10, name: 'AntMan', power:25, ability:"Shrink", ability2:"Grow" },
      { id: 11, name: 'IronMan', power:50, ability:"Fly", ability2:"Laser" },
      { id: 12, name: 'SpiderMan', power:45, ability:"Trow Spider Webs", ability2:"Agility" },
      { id: 13, name: 'AquaMan', power:33, ability:"Breathe Underwater", ability2:"Strength" },
      { id: 14, name: 'SuperMan', power:99, ability:"Fly", ability2:"Strength" },
      { id: 15, name: 'BatMan', power:25, ability:"Money", ability2:"High IQ" }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
