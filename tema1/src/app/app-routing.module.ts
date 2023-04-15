import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { CoverComponent } from './cover/cover.component';

const routes: Routes = [
  { path: 'home', component: CoverComponent },
  {
    path: 'city/:id',
    component: PlaceDetailComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
