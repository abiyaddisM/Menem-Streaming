import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PlaylistPageComponent} from "./pages/playlist-page/playlist-page.component";
import {ViewPageComponent} from "./pages/view-page/view-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {SignInPageComponent} from "./pages/sign-in-page/sign-in-page.component";
import {AuthGuard} from "./services/auth-guard-service/auth-guard.service";
import {MovieViewPageComponent} from "./pages/movie-view-page/movie-view-page.component";
import {TvShowViewPageComponent} from "./pages/tv-show-view-page/tv-show-view-page.component";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";

const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  {path: 'playlist', component: PlaylistPageComponent,canActivate:[AuthGuard]},
  {path: 'view', component: ViewPageComponent},
  {path: 'view/movie/:id', component: MovieViewPageComponent},
  {path: 'view/tv/:id', component: TvShowViewPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'sign-in', component: SignInPageComponent},
  {path: 'sign-up', component: SignUpPageComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
