import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMultiSearchService {
  private url = 'https://api.themoviedb.org/3/search/multi';
  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjA2MzgwMGI2ZmE3ZWEwMTA5NWU2ZTVjNzQ2YTY5ZSIsInN1YiI6IjY2MzUyMzhlMmEwOWJjMDEyOTU5MmNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TS8KC1awG48WhZXHSejr7tPLPZZO5deB5AY5yMCajNI'
  });
 
  constructor(private http: HttpClient) { }

  getSearches(query: string, page: number = 1): Observable<any> {
    let params = new HttpParams()
      .set('query', query)
      .set('include_adult', false)
      .set('language', 'en-US')
      .set('page', page.toString());

    return this.http.get(this.url, { headers: this.headers, params });
  }
}
