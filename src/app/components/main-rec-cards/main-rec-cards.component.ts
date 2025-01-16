import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-rec-cards',
  templateUrl: './main-rec-cards.component.html',
  styleUrls: ['./main-rec-cards.component.css']
})
export class MainRecCardsComponent {
  @Input() id = ''
  @Input() imageUrl= ''
  @Input() mediaType = ''
  @Input() title = ''
  @Input() date = ''
  @Input() length = ''
  @Input() genre:string[] = []
  @Input() description = ''
  @Input() poster = ''
  @Input() rating = 0
  @Input() by = ''
  state = false
  constructor(private router:Router) {
  }
  navigate(){
    if(this.mediaType === 'tv')
      this.router.navigate(['/view', 'tv',this.id],{queryParams:{season:1,episode:1}})
    else
      this.router.navigate(['/view', 'movie',this.id])

  }
  onDialogOpen(){
    this.state = true
  }
  onDialogClose(){
    this.state = false
  }

  protected readonly Number = Number;
}
