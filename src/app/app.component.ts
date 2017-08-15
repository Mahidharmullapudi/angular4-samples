import {Component} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Batman'),
    new Hero(2, 'Spider Man'),
    new Hero(3, 'Hulk'),
    new Hero(4, 'Superman'),
    new Hero(5, 'Wonder Woman'),
    new Hero(6, 'Iron Man')
  ];
  hero = new Hero(10, 'Sachin');
  myHero = this.hero;
}
