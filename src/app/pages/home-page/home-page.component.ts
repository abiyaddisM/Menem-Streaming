import {AfterViewInit, Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {GetTrendingNowService} from "../../services/GET/get-trending-now.service";
import { getAnalytics, logEvent } from "firebase/analytics";

// @ts-ignore
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent implements AfterViewInit{
  constructor(private getTrendingNowService: GetTrendingNowService) { }
  trendingNow:any
  trendingNowLoader = false;
  popularMovie:any
  popularMovieLoader = false;
  popularTv:any
  popularTvLoader = false;
  ngOnInit() {
    this.trendingNowLoader = true
    this.popularMovieLoader = true
    this.popularTvLoader = true
    this.getTrendingNowService.getTrending().subscribe(
    (data) => {
      this.trendingNowLoader = false;
      this.trendingNow = data.results;
      },
      error => alert(error)
    );
    this.getTrendingNowService.getMovieTrending().subscribe(
      data => {
        this.popularMovieLoader = false
        this.popularMovie = data.results
        console.log(data.results)
      },
      error => alert(error)
    )
    this.getTrendingNowService.getTvTrending().subscribe(
      data => {
        this.popularTvLoader = false
        this.popularTv = data.results
      },
      error => alert(error)
    )
  }


  ngAfterViewInit(): void {
    const analytics = getAnalytics();
    logEvent(analytics, 'Test_Abiy');
    console.log("Works")

  }
}
