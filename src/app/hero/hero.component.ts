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

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  // Delete the Hero based on the Hero Id. If the hero id is the one selected make it null.
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }
}
