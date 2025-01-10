import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import {saxAddOutline} from  '@ng-icons/iconsax/outline'
import { AppComponent } from './app.component';
import { MoveSliderComponent } from './components/move-slider/move-slider.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MiniInfoComponent } from './components/mini-info/mini-info.component';
import { MainRecCardsComponent } from './components/main-rec-cards/main-rec-cards.component';
import { TransparentButtonComponent } from './components/buttons/transparent-button/transparent-button.component';
import {NgOptimizedImage} from "@angular/common";
import { SliderSecIndComponent } from './components/slider-sec-ind/slider-sec-ind.component';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { CardShowCaseComponent } from './components/card-show-case/card-show-case.component';
import { CardsComponent } from './components/cards/cards.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SearchComponent } from './pages/search/search.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { NaviationSideBarComponent } from './components/naviation-side-bar/naviation-side-bar.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import {Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { SideNavigationButtonComponent } from './components/buttons/side-navigation-button/side-navigation-button.component';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  PreventMalvertisementDirective,
} from "./directives/prevent-unwanted-clicks.directive";
import { TvShowViewPageComponent } from './pages/tv-show-view-page/tv-show-view-page.component';
import {MovieViewPageComponent} from "./pages/movie-view-page/movie-view-page.component";
import { FooterComponent } from './components/footer/footer.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {environment} from "../ environment";
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import {PlaylistCardComponent} from "./components/playlist-card/playlist-card.component";
import {ConfirmDialogComponent} from "./components/confirm-dialog/confirm-dialog.component";
import {CreatePlaylistDialogComponent} from "./components/create-playlist-dialog/create-playlist-dialog.component";
import {PlaylistViewPageComponent} from "./pages/playlist-view-page/playlist-view-page.component";
import {AddToPlaylistDialogComponent} from "./components/add-to-playlist-dialog/add-to-playlist-dialog.component";
import {DropdownModule} from "primeng/dropdown";
const app = initializeApp(environment.firebase);

export const analytics = getAnalytics(app);
@NgModule({
  declarations: [
    AppComponent,
    MoveSliderComponent,
    NavigationBarComponent,
    HomePageComponent,
    MiniInfoComponent,
    MainRecCardsComponent,
    TransparentButtonComponent,
    SliderSecIndComponent,
    IconButtonComponent,
    CardShowCaseComponent,
    CardsComponent,
    SearchComponent,
    SearchCardComponent,
    NaviationSideBarComponent,
    ViewPageComponent,
    AboutPageComponent,
    SideNavigationButtonComponent,
    SignInPageComponent,
    InputFieldComponent,
    PreventMalvertisementDirective,
    TvShowViewPageComponent,
    MovieViewPageComponent,
    FooterComponent,
    EpisodeListComponent,
    SignUpPageComponent,
    PlaylistPageComponent,
    PlaylistCardComponent,
    ConfirmDialogComponent,
    CreatePlaylistDialogComponent,
    PlaylistViewPageComponent,
    AddToPlaylistDialogComponent
  ],
  bootstrap: [AppComponent],

  imports: [BrowserModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({saxAddOutline}),
    ReactiveFormsModule, DropdownModule],
  exports: [
    TransparentButtonComponent,
    MovieViewPageComponent
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
