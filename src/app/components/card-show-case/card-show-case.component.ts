import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-show-case',
  templateUrl: './card-show-case.component.html',
  styleUrls: ['./card-show-case.component.css']
})

export class CardShowCaseComponent {
  @Input() cardsData:any
  @Input() showTitle = true
  @Input() width = '100'
  constructor() {
    console.log(this.cardsData)
  }
  checkTitle(title:any){
    if (title.hasOwnProperty('name'))
      return title.name;
    else if(title.hasOwnProperty('title'))
      return title.title;
    else
      return title.original_name;
  }

}

