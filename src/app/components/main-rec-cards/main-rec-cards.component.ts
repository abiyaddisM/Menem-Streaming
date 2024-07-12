import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-rec-cards',
  templateUrl: './main-rec-cards.component.html',
  styleUrls: ['./main-rec-cards.component.css']
})
export class MainRecCardsComponent {
  @Input() id = ''
  @Input() imageUrl:string= 'https://wallpapercave.com/wp/wp12067729.jpg'
  @Input() mediaType = ''
  @Input() title = 'Invincible'
  @Input() date = ''
  @Input() length = ''
  @Input() genre:string[] = []
  @Input() description = 'Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.\n'

  constructor(private router:Router) {
  }
  navigate(){
    if(this.mediaType === 'tv')
      this.router.navigate(['/view', 'tv',this.id],{queryParams:{season:1,episode:1}})
    else
      this.router.navigate(['/view', 'movie',this.id])

  }
}
