import { Component, DoCheck, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { MoviesService } from '../../services/movies.service';
import { SeriesService } from '../../services/series.service';
import { MovieModel } from '../../models/movies';
import { TVShowModel } from '../../models/tvshows';
import { TvShowsComponent } from '../tv-shows/tv-shows.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {

  trending: (MovieModel | TVShowModel)[]

  //movies
  nowPlayingMovies: MovieModel[]
  popularMovies: MovieModel[]
  topRatedMovies: MovieModel[]
  actionMovies: MovieModel[]
  animationMovies: MovieModel[]
  adventureMovies: MovieModel[]


  //series
  popularSeries: TVShowModel[]
  topRatedSeries: TVShowModel[]
  airingTodaySeries: TVShowModel[]

  constructor(private tmdbService: TmdbService, private movieService: MoviesService, private seriesService: SeriesService) {
    this.trending = []
    this.nowPlayingMovies = []
    this.popularMovies = []
    this.topRatedMovies = []
    this.actionMovies = []
    this.animationMovies = []
    this.adventureMovies = []
    this.popularSeries = []
    this.topRatedSeries = []
    this.airingTodaySeries = []
  }

  ngOnInit(): void {
    this.handleTrending()
    this.handleNowPlayingMovies()
    this.handlePopularMovies()
    this.handleTopRatedMovies()
    this.handleActionMovies()
    this.handleAdventureMovies()
    this.handleAnimationMovies()
    this.handlePopularSeries()
    this.handleTopRatedSeries()
    this.handleArrivingTodaySeries()
  }

  ngDoCheck(): void {
  }

  handleTrending() {
    this.tmdbService.getTrending().subscribe(
      (data) => {
        this.trending = data.results
      }
    )
  }

  handleNowPlayingMovies() {
    this.movieService.nowPlaying().subscribe(
      (data) => {
        this.nowPlayingMovies = data.results
      }
    )
  }

  handlePopularMovies() {
    this.movieService.popular().subscribe(
      (data) => {
        this.popularMovies = data.results
      }
    )
  }

  handleTopRatedMovies() {
    this.movieService.topRated().subscribe(
      (data) => {
        this.topRatedMovies = data.results
      }
    )
  }
  handleActionMovies() {
    this.movieService.action().subscribe(
      (data) => {
        this.actionMovies = data.results
      }
    )
  }

  handleAdventureMovies() {
    this.movieService.adventure().subscribe(
      (data) => {
        this.adventureMovies = data.results
      }
    )
  }

  handleAnimationMovies() {
    this.movieService.animation().subscribe(
      (data) => {
        this.animationMovies = data.results
      }
    )
  }

  handlePopularSeries() {
    this.seriesService.popular().subscribe(
      (data) => {
        this.popularSeries = data.results
      }
    )
  }

  handleTopRatedSeries() {
    this.seriesService.topRated().subscribe(
      (data) => {
        this.topRatedSeries = data.results
      }
    )
  }

  handleArrivingTodaySeries() {
    this.seriesService.airingToday().subscribe(
      (data) => {
        this.airingTodaySeries = data.results
      }
    )
  }
}
