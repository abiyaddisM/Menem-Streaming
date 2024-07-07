import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";
import {GetMultiSearchService} from "../../services/GET/get-multi-search.service";
import {SearchHistoryService} from "../../services/search-history.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [fadeInOut]

})
export class SearchComponent implements OnDestroy,OnInit,AfterViewInit  {
  // @ts-ignore
  @ViewChild('inputField') inputField:ElementRef
  @Input() searchToggle = false
  @Output() booleanChange = new EventEmitter<boolean>();
  displaySearched = false
  searchedResult:any
  loading = false;
  cards:any[] = []
  constructor(private search:GetMultiSearchService,
              private searchHistory:SearchHistoryService
            ) {
  }
  ngOnInit(): void {
    this.searchHistory.searchHistory$.subscribe(history =>{
      this.cards = history
    })

  }
  ngAfterViewInit(): void {
      this.inputField.nativeElement.focus();
  }
  toggleSearch(){
    this.booleanChange.emit(this.searchToggle)
    this.searchToggle = !this.searchToggle
    this.searchedResult = [];
    this.displaySearched = false
  }
  ngOnDestroy() {
    this.searchedResult = [];
  }

  quickSearch(value:string){
    if(value.length === 0 || /^\s*$/.test(value)){
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
    if(value.length === 0 || /^\s*$/.test(value)){
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
