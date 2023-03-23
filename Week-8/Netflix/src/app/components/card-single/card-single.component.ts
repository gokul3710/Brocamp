import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../../models/movies';
import { TVShowModel } from '../../models/tvshows';

@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.css']
})
export class CardSingleComponent implements OnInit {

  @Input() movie :  MovieModel | TVShowModel | null 
  @Input() size: "custom" | "auto" = "auto"
  link: string = ""
  title: string  =  ""

  constructor(){
    this.movie = null
  }

  ngOnInit(): void {
    this.link = 'https://image.tmdb.org/t/p/w500/' + this.movie!["backdrop_path"]
    this.title = this.getTitleOrName(this.movie)
  }

  getMatchPercentage(movie: MovieModel | TVShowModel | null){
    if(movie){
      return Math.floor(movie.vote_average*10)
    }
    return
  }

  isMovieModel(obj: any): obj is MovieModel {
    return obj && typeof obj.title === "string" ;
  }
  
  isTVShowModel(obj: any): obj is TVShowModel {
    return obj && typeof obj.name === "string" ;
  }

  getTitleOrName(obj: MovieModel | TVShowModel | null): string {
    if (this.isMovieModel(obj)) {
      return obj.title;
    } else if (this.isTVShowModel(obj)) {
      return obj.name;
    }    
    throw new Error("Object is not of type MovieModel or TVShowModel");
  }

  getLink(movie: MovieModel| TVShowModel | null): string{
    if(movie != null){
      return '/movie/' + movie.id
    }
    return ''
  }
  


}
