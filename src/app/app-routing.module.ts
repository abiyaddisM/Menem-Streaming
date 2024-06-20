import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PlaylistPageComponent} from "./pages/playlist-page/playlist-page.component";
import {ViewPageComponent} from "./pages/view-page/view-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {SignInPageComponent} from "./pages/sign-in-page/sign-in-page.component";

const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  {path: 'playlist', component: PlaylistPageComponent},
  {path: 'view/:mediaType/:id', component: ViewPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'sign-in', component: SignInPageComponent},
  {path: 'sign-up', component: SignInPageComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
