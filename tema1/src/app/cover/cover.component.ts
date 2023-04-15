import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit {
  pageTitle: string = 'NEW ADVENTURE';

  receiveMessage(cityName: string): void {
    this.pageTitle = cityName;
  }

  constructor() {}

  ngOnInit(): void {}
}
