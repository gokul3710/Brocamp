import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { SeriesService } from '../../services/series.service';
import { TVShowModel } from '../../models/tvshows';


@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['../home/home.component.css']
})
export class TvShowsComponent implements OnInit {

  popularSeries: TVShowModel[]
  topRatedSeries: TVShowModel[]
  airingTodaySeries: TVShowModel[]

  constructor(private seriesService: SeriesService) { 
    this.popularSeries = []
    this.topRatedSeries = []
    this.airingTodaySeries = []
  }

  ngOnInit() {
      this.handlePopularSeries()
      this.handleTopRatedSeries()
      this.handleArrivingTodaySeries()
  }

  handlePopularSeries(){
    this.seriesService.popular().subscribe(
      (data)=>{
        this.popularSeries = data.results
        console.log(this.popularSeries);
        
      }
    )
  }

  handleTopRatedSeries(){
    this.seriesService.topRated().subscribe(
      (data)=>{
        this.topRatedSeries = data.results
        
      }
    )
  }

  handleArrivingTodaySeries(){
    this.seriesService.airingToday().subscribe(
      (data)=>{
        this.airingTodaySeries = data.results 
      }
    )
  }
}
