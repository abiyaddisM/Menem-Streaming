import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent {
  @Input() imageUrl = 'https://preview.redd.it/6dc8pfhig5nc1.jpeg?auto=webp&s=b30586d4a49b7e301771737e5835a19c18ab9b78'
  @Input() title = 'The Fall Guy'
  @Input() rating = 9
  @Input() id = ''
  @Input() mediaType = ''
  @Input() genre = ['Fantasy','Adventure']
  constructor(private router:Router) {
  }
  navigate(){
    if(this.mediaType === 'tv')
      this.router.navigate(['/view', 'tv',this.id],{queryParams:{season:1,episode:1}})
    else
      this.router.navigate(['/view', 'movie',this.id])

  }

}
