import {Component, EventEmitter, Input, Output} from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";
import {animate, style, transition, trigger} from "@angular/animations";
import {GetMultiSearchService} from "../../services/GET/get-multi-search.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [fadeInOut]

})
export class SearchComponent {
  @Input() searchToggle = true
  @Output() booleanChange = new EventEmitter<boolean>();
  displaySearched = false
  searchedResult:any
  loading = false;
  cards:movieCard[] = [
    {image:'https://preview.redd.it/6dc8pfhig5nc1.jpeg?auto=webp&s=b30586d4a49b7e301771737e5835a19c18ab9b78',title: 'The Fall Guy',rating: 7.3, genre: ['28','18']},
    {image:'https://cdn.marvel.com/u/prod/marvel/i/mg/9/80/65f9a37344eaa/clean.jpg',title: 'X-Men 97',rating: 9, genre: ['28','12']},
    {image:'https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',title: 'Kingdom Of The Planet Of the Ape',rating: 7.8, genre: ['28','14']},
    {image:'https://ghostbustersnews.com/wp-content/uploads/2023/12/ghostbusters_frozen_empire_poster.webp',title: 'Ghostbusters: Frozen Empire',rating: 6.3, genre: ['28','14']},
    {image:'https://i.ebayimg.com/images/g/OLgAAOSwe-phZOzF/s-l1200.jpg',title: 'Up',rating: 8.3, genre: ['28','12']},
    {image:'https://i.redd.it/8hzgy287h2j61.jpg',title: 'Godzilla x Kong: The New Empire',rating: 6.5, genre: ['28','14']},
    {image:'https://m.media-amazon.com/images/M/MV5BZTYzNGIzNDItMjQ5Yy00NmNiLWI4YTQtNzVjYzBjZDEzNDdjXkEyXkFqcGdeQXVyMjQ4ODcxNTM@._V1_FMjpg_UX1000_.jpg',title: 'Dark-Matter',rating: 7.9, genre: ['28','18']},
  ]
  constructor(private search:GetMultiSearchService) {
  }
  toggleSearch(){
    this.booleanChange.emit(this.searchToggle)
    this.searchToggle = !this.searchToggle
  }
  quickSearch(value:string){
    this.displaySearched = false
    console.log(value)
  }
  fullSearch(event:KeyboardEvent,value:string){
    if (event.key === 'Enter') {
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
interface movieCard{
  image:string,
  title:string,
  rating:number,
  genre:string[]
}
