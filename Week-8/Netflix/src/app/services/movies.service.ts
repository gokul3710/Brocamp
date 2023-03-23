import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TmdbService } from './tmdb.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private tmdb: TmdbService) { }

  trending(): Observable<any>{
    return this.http.get(`${this.tmdb.baseurl}/trending/movie/week?api_key=${this.tmdb.apikey}`); 
  }

  nowPlaying(): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/movie/now_playing?api_key=${this.tmdb.apikey}`);
  }

  popular(): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/movie/popular?api_key=${this.tmdb.apikey}`);
  }

  topRated(): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/movie/top_rated?api_key=${this.tmdb.apikey}`);
  }

  action(): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/discover/movie?api_key=${this.tmdb.apikey}&with_genres=28`);
  }

  // adventure
  adventure(): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/discover/movie?api_key=${this.tmdb.apikey}&with_genres=12`);
  }

  // animation
  animation(): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/discover/movie?api_key=${this.tmdb.apikey}&with_genres=16`);
  }

  // comedy
  comedy(): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/discover/movie?api_key=${this.tmdb.apikey}&with_genres=35`);
  }

  // documentary
  documentary(): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/discover/movie?api_key=${this.tmdb.apikey}&with_genres=99`);
  }

  // science-fiction:878

  scienceFiction(): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/discover/movie?api_key=${this.tmdb.apikey}&with_genres=878`);
  }

  // thriller:53
  thriller(): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/discover/movie?api_key=${this.tmdb.apikey}&with_genres=53`);
  }

  // getmoviedatails
  movie(movieId: string ): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/movie/${movieId}?api_key=${this.tmdb.apikey}`)
  }

  // getMovieVideo
  movieVideo(data: any): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/movie/${data}/videos?api_key=${this.tmdb.apikey}`)
  }

  // getMovieCast
  movieCast(movieId: string ): Observable<any> {
    return this.http.get(`${this.tmdb.baseurl}/movie/${movieId}/credits?api_key=${this.tmdb.apikey}`)
  }

}
