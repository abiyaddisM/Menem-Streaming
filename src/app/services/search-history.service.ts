import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  private searchHistorySubject = new BehaviorSubject<any[]>(this.getHistory());
  searchHistory$ = this.searchHistorySubject.asObservable();

  constructor() {}

  // Method to get history from local storage
  private getHistory(): any[] {
    const history = localStorage.getItem('history');
    return history ? JSON.parse(history).history : [];
  }

  // Method to add a movie to the history
  addToHistory(detail: any,mediaType:string): void {
    const id = detail.id.toString();
    const image = detail.poster_path;
    const genre = detail.genres.map((g: any) => g.id.toString());
    const rating = detail.vote_average;
    const title = detail.name || detail.title;

    let historyArr: any[] = this.getHistory();
    historyArr = historyArr.filter(item => item.id !== id);
    const newObj = { id, image, title, rating, genre,mediaType};
    if (historyArr.length >= 10) {
      historyArr.pop();
    }
    historyArr.unshift(newObj);
    localStorage.setItem('history', JSON.stringify({ history: historyArr }));
    this.searchHistorySubject.next(historyArr);
  }
}
