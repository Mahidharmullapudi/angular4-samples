import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroDetailService} from '../hero-detail/hero-detail.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router,
              private heroService: HeroDetailService) {
  }

  getHeroesList(): void {
    this.heroService.getHeroes().then(heroes =>
      this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroesList();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail',
      this.selectedHero.id]);
  }
}
