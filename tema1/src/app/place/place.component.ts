import { Component, OnInit } from '@angular/core';
import { Place } from '../interfaces/place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent {
  places: Place[] = [
    {
      id: 1,
      country: 'VALEKHUM',
      description:
        'Plan your trip with us and travel around the world with the most affordable packages!',
      image: 'assets/images/place1.png',
    },
    {
      id: 2,
      country: 'SAVEJ VELLY',
      description:
        'Plan your trip with us and travel around the world with the most affordable packages!',
      image: 'assets/images/place1.png',
    },
    {
      id: 3,
      country: 'SARIGHAT',
      description:
        'Plan your trip with us and travel around the world with the most affordable packages!',
      image: 'assets/images/place1.png',
    },
    {
      id: 4,
      country: 'THE CITY',
      description:
        'Plan your trip with us and travel around the world with the most affordable packages!',
      image: 'assets/images/place1.png',
    },
    {
      id: 4,
      country: 'THE CITY',
      description:
        'Plan your trip with us and travel around the world with the most affordable packages!',
      image: 'assets/images/place1.png',
    },
    {
      id: 5,
      country: 'THE CITY',
      description:
        'Plan your trip with us and travel around the world with the most affordable packages!',
      image: 'assets/images/place1.png',
    },
  ];
}
