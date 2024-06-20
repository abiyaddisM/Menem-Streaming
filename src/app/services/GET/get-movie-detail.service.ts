import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetMovieDetailService {
  private url = 'https://api.themoviedb.org/3/movie';
  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjA2MzgwMGI2ZmE3ZWEwMTA5NWU2ZTVjNzQ2YTY5ZSIsInN1YiI6IjY2MzUyMzhlMmEwOWJjMDEyOTU5MmNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TS8KC1awG48WhZXHSejr7tPLPZZO5deB5AY5yMCajNI'
  });

  constructor(private http: HttpClient) { }

  getMovieDetail(movieID: string): Observable<any> {
    const urlWithId = `${this.url}/${movieID}`;


    return this.http.get(urlWithId, { headers: this.headers });
  }
}
