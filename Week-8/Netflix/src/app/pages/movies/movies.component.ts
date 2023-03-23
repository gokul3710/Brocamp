import { Component, OnInit, DoCheck } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieModel } from '../../models/movies';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['../home/home.component.css']
})
export class MoviesComponent implements OnInit {

  //movies
  trendingMovies: MovieModel[]
  nowPlayingMovies: MovieModel[]
  popularMovies: MovieModel[]
  topRatedMovies: MovieModel[]
  actionMovies: MovieModel[]
  animationMovies: MovieModel[]
  adventureMovies: MovieModel[]
  comedyMovies: MovieModel[]
  documentaryMovies: MovieModel[]
  scienceFictionMovies: MovieModel[]
  thrillerMovies: MovieModel[]

  constructor(private movieService: MoviesService) { 
    this.trendingMovies = []
    this.nowPlayingMovies = []
    this.popularMovies = []
    this.topRatedMovies = []
    this.actionMovies = []
    this.animationMovies = []
    this.adventureMovies = []
    this.comedyMovies = []
    this.documentaryMovies = []
    this.scienceFictionMovies = []
    this.thrillerMovies = []
  }

  ngOnInit() {
    this.handleTrendingMovies()
    this.handleNowPlayingMovies()
    this.handlePopularMovies()
    this.handleTopRatedMovies()
    this.handleActionMovies()
    this.handleAdventureMovies()
    this.handleAnimationMovies()
    this.handleComedyMovies()
    this.handleDocumentaryMovies()
    this.handleScienceFictionMovies()
    this.handleThrillerMovies()
  }

  handleTrendingMovies(){
    this.movieService.trending().subscribe(
      (data)=>{
        this.trendingMovies = data.results
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

  handleComedyMovies() {
    this.movieService.comedy().subscribe(
      (data) => {
        this.comedyMovies = data.results
      }
    )
  }
  handleDocumentaryMovies() {
    this.movieService.documentary().subscribe(
      (data) => {
        this.documentaryMovies = data.results
      }
    )
  }
  handleThrillerMovies() {
    this.movieService.thriller().subscribe(
      (data) => {
        this.thrillerMovies = data.results
      }
    )
  }
  handleScienceFictionMovies() {
    this.movieService.scienceFiction().subscribe(
      (data) => {
        this.scienceFictionMovies = data.results
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
}
