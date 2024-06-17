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
  ngOnInit() {
    this.getTrendingNowService.getTrending().subscribe(
      data => this.trendingNow = data.results,
      error => console.error(error)
    );
  }
}
