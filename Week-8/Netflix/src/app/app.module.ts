import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//http
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardSingleComponent } from './components/card-single/card-single.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './pages/search/search.component';


//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { UserService } from './services/user.service';
import { TmdbService } from './services/tmdb.service';
import { MoviesService } from './services/movies.service';
import { SeriesService } from './services/series.service';
import { MovieComponent } from './pages/movie/movie.component';
import { CastComponent } from './components/cast/cast.component';
import { ScrollResetDirective } from './scroll-reset.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    BannerComponent,
    CardSingleComponent,
    TvShowsComponent,
    MoviesComponent,
    SearchComponent,
    LoginComponent,
    MovieComponent,
    CastComponent,
    ScrollResetDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService,TmdbService,MoviesService,SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
