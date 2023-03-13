import { Component } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {DialogComponentDialog} from "../dialog/dialog.component";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService,
              private location: Location) { }
  goBack(): void {
    this.location.back();
  }
  add(name: string): void {
    name = name.trim();

    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.goBack()
      }
      );

  }

}
