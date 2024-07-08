import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {GetTrendingNowService} from "../../services/GET/get-trending-now.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent {
  constructor(private getTrendingNowService: GetTrendingNowService) { }
  trendingNow:any
  popularMovie:any
  popularTv:any
  ngOnInit() {
    this.getTrendingNowService.getTrending().subscribe(
      data => this.trendingNow = data.results,
      error => alert(error)
    );
    this.getTrendingNowService.getMovieTrending().subscribe(
      data => this.popularMovie = data.results,
      error => alert(error)
    )
    this.getTrendingNowService.getTvTrending().subscribe(
      data => this.popularTv = data.results,
      error => alert(error)
    )
  }
}
