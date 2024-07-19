import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-card-show-case',
  templateUrl: './card-show-case.component.html',
  styleUrls: ['./card-show-case.component.css']
})

export class CardShowCaseComponent implements AfterViewInit,OnInit{
  // @ts-ignore
  @ViewChild("cardContainer") cardContainer:ElementRef
  @Input() cardsData:any
  @Input() showTitle = true
  @Input() title = ''
  @Input() width = '100'
  @Input() cardLoader = false;
  @Input() isTvShow = false
  cardLimit:number = 0

  checkTitle(title:any){
    if (title.hasOwnProperty('name'))
      return title.name;
    else if(title.hasOwnProperty('title'))
      return title.title;
    else
      return title.original_name;
  }

  cardDisplayArrangement(){
    const cardContainerWidth = this.cardContainer.nativeElement.offsetWidth;
    const cardWidth = 190;
    const capacityPerRow = this.calculateOneRowChild(cardContainerWidth,cardWidth,10);
    const cardLength =  20;
    this.cardLimit =  cardLength - (cardLength % capacityPerRow)
    // console.log((cardContainerWidth - (capacityPerRow - 1) * 10) / capacityPerRow)
    // console.log(this.cardLimit, " ", capacityPerRow);
  }
  calculateOneRowChild(parentWidth:number,childWidth:number,gap:number){
    if (parentWidth <= 600)
      return 2
    const holdCard = Math.floor(parentWidth/childWidth);
    const maxCardSize = holdCard * (childWidth + gap) - 10
    // console.log(maxCardSize, "  ",parentWidth)
    return maxCardSize < parentWidth ? holdCard : holdCard - 1

  }


  ngAfterViewInit(): void {
    this.cardDisplayArrangement();
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.cardDisplayArrangement()
  }

  protected readonly Array = Array;

  ngOnInit(): void {
    // console.log("Hey")
    // console.log(this.cardsData)

  }
}

