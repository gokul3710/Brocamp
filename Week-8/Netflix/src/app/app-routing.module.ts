import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  {path: "", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "movie/:id", component: MovieComponent, canActivate: [AuthGuard]},
  {path: "tv", component: TvShowsComponent, canActivate: [AuthGuard]},
  {path: "movies",component: MoviesComponent, canActivate: [AuthGuard] },
  {path: "search",component: SearchComponent, canActivate: [AuthGuard] },
  {path: "login",component: LoginComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
