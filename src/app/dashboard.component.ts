import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

import { Movie } from "./movie";
import { MovieService } from "./movie.service";

@Component({
  selector: "my-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  movies: Movie[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
    this.movieService
      .getMovies()
      .subscribe(movies => {
        this.movies[0] = movies;
      });
  }

  gotoDetail(hero: Hero): void {
    const link = ["/detail", hero.id];
    this.router.navigate(link);
  }
}
