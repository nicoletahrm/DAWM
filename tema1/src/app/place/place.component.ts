import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPlaces = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.places;
  }

  filteredPlaces: Place[] = [];

  @Output() eventEmmiter = new EventEmitter<Place>();

  messageEvent(cityName: string): void {
    const place: Place = { id: 0, city: cityName, description: '', image: '' };
    this.eventEmmiter.emit(place);
  }

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.placeService.getPlaces().subscribe({
      next: (places) => {
        this.places = places;
        this.filteredPlaces = places;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  performFilter(filterBy: string): Place[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.places.filter(
      (place: Place) => place.city.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
}
