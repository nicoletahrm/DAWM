import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '../services/place.service';
import { Place } from '../interfaces/place';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss'],
})
export class PlaceDetailComponent implements OnInit {
  errorMessage: string = '';
  place: Place | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getPlace(id);
    }
  }

  getPlace(id: number): void {
    this.placeService.getPlaceById(id).subscribe({
      next: (place) => (this.place = place),
      error: (err) => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this.router.navigate(['/home']);
  }
}
