import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TmdbService } from './tmdb.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient, private tmdb: TmdbService) { }
   

  popular():Observable<any>{
    return this.http.get(`${this.tmdb.baseurl}/tv/popular?api_key=${this.tmdb.apikey}`);
  }

  topRated():Observable<any>{
    return this.http.get(`${this.tmdb.baseurl}/tv/top_rated?api_key=${this.tmdb.apikey}`);
  }

  airingToday():Observable<any>{
    return this.http.get(`${this.tmdb.baseurl}/tv/airing_today?api_key=${this.tmdb.apikey}`);
  }

}
