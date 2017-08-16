import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroDetailService} from './hero-detail/hero-detail.service';
import {HeroComponent} from './hero/hero.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [HeroDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
