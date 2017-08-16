import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Hero} from './hero';
import {HeroDetailService} from './hero-detail/hero-detail.service';
import {HeroComponent} from './hero/hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}

RouterModule.forRoot([
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroComponent
  }
]);
