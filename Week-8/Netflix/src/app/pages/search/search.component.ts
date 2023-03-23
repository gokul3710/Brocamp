import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { MovieModel } from '../../models/movies';
import { MoviesService } from '../../services/movies.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { TVShowModel } from 'src/app/models/tvshows';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,DoCheck,OnChanges {

  trending: MovieModel[] 
  search: string = ''

  constructor(private tmdbService: TmdbService, private movieService: MoviesService, private userService: UserService, private router: Router){ 
    this.trending = []
  }

  
  ngOnInit() {
      this.search =  this.userService.getSearch()
      this.handleSearch()
  }

  ngDoCheck() {
      if(this.search == ""){
        this.router.navigateByUrl('/')
      }
      if(this.search != this.userService.getSearch() ){
        this.search = this.userService.getSearch()
        this.handleSearch()
      }
  }

  ngOnChanges(){
    this.handleSearch()
  }

  handleSearch(){
    this.tmdbService.getSearch(this.search).subscribe(
      (data)=>{
        console.log(data.results);
        this.trending = data.results
      }
    )
  }

  
  hasBackdropPath(movie: MovieModel | TVShowModel | null): boolean{
    if(movie?.backdrop_path){
      return true
    }
    return false
  }
}
