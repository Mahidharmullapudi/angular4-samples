import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroDetailService} from './hero-detail/hero-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [HeroDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
