import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetTrendingNowService {
  private url = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';
  private options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjA2MzgwMGI2ZmE3ZWEwMTA5NWU2ZTVjNzQ2YTY5ZSIsInN1YiI6IjY2MzUyMzhlMmEwOWJjMDEyOTU5MmNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TS8KC1awG48WhZXHSejr7tPLPZZO5deB5AY5yMCajNI'
    }
  };

  constructor(private http: HttpClient) { }

  getTrending(): Observable<any> {
    return this.http.get(this.url, this.options);
  }
}
