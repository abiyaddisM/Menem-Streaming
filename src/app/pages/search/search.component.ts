import {Component, EventEmitter, Input, Output} from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";
import {animate, style, transition, trigger} from "@angular/animations";
import {GetMultiSearchService} from "../../services/GET/get-multi-search.service";
import { map } from 'rxjs/operators';
import {SearchHistoryService} from "../../services/search-history.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [fadeInOut]

})
export class SearchComponent implements OnDestroy,OnInit {
  @Input() searchToggle = true
  @Output() booleanChange = new EventEmitter<boolean>();
  displaySearched = false
  searchedResult:any
  loading = false;
  cards:any[] = []
  constructor(private search:GetMultiSearchService,
              private searchHistory:SearchHistoryService) {
  }
  ngOnInit(): void {
    this.searchHistory.searchHistory$.subscribe(history =>{
      this.cards = history
    })
  }
  toggleSearch(){
    this.booleanChange.emit(this.searchToggle)
    this.searchToggle = !this.searchToggle
    this.searchedResult = [];
    this.displaySearched = false
  }
  ngOnDestroy() {
    console.log("Bithc is gone")
    this.searchedResult = [];
  }

  quickSearch(value:string){
    if(value.length === 0){
      this.displaySearched = false
      return
    }
    this.displaySearched = true
    this.loading = true
    this.search.getSearches(value)
      .subscribe(data =>{
        this.loading = false
        this.searchedResult = data.results;
      })
  }
  fullSearch(event:KeyboardEvent,value:string){
    if(value.length === 0){
      this.displaySearched = false
      return
    }
    if (event.key === 'Enter') {
      this.displaySearched = true
      this.loading = true
       this.search.getSearches(value)
         .subscribe(data =>{
         this.loading = false
         this.searchedResult = data.results;
       })
    }
  }
  fullSearch2(value:string){
      this.displaySearched = true
      this.loading = true
        this.search.getSearches(value)
          .subscribe(data =>{
            this.loading = false
            this.searchedResult = data.results;
            console.log(data.results)
          })

  }


}
