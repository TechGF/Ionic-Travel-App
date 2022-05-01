import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City!',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg',
      149.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
    new Place(
      'p2',
      'Amour Toujours',
      'A romantic place in Paris!',
      'https://miro.medium.com/max/1200/1*t-nXIcaD3oP6CS4ydXV1xw.jpeg',
      189.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/f/fe/Golden_Fog%2C_San_Francisco.jpg',
      99.99,
      new Date('2022-01-01'),
      new Date('2022-12-31')
    ),
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }
  getPlace(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return { ...this._places.find((p) => p.id === id) };
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {}
}
