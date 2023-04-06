import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { PlaceComponent } from './place/place.component';

@NgModule({
  declarations: [AppComponent, CoverComponent, ArticleComponent, PlaceComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
