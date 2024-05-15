import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AboutComponent } from './about/about.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { CarsComponent } from './cars/cars.component';
import { CarsCategoryComponent } from './cars-category/cars-category.component';
import { ProcessComponent } from './process/process.component';
import { ClientreviewComponent } from './clientreview/clientreview.component';
import { BlogComponent } from './blog/blog.component';
import { TalkComponent } from './talk/talk.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    AboutComponent,
    BookingSearchComponent,
    CarsComponent,
    CarsCategoryComponent,
    ProcessComponent,
    ClientreviewComponent,
    BlogComponent,
    TalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
