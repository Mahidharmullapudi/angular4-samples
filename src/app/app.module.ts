import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';

import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroDetailService} from './hero-detail/hero-detail.service';
import {HeroComponent} from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroComponent
      }
    ])
  ],
  providers: [HeroDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
