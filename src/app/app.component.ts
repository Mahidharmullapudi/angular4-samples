import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Batman', 'Spider Man', 'Hulk', 'Superman', 'Wonder Woman', 'Iron Man'];
  myHero = this.heroes[0];
  hero: Hero = {
    id: 1,
    name: 'Batman'
  };
}

export class Hero {
  id: number;
  name: string;
}
