import { Component, OnInit } from '@angular/core';
import { Place } from '../interfaces/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent implements OnInit {
  places: Place[] = [];
  errorMessage: string = '';

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.placeService.getPlaces().subscribe({
      next: (places) => {
        this.places = places;
        //this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
