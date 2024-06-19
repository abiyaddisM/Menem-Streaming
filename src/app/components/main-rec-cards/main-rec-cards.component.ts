import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-rec-cards',
  templateUrl: './main-rec-cards.component.html',
  styleUrls: ['./main-rec-cards.component.css']
})
export class MainRecCardsComponent {
  @Input() imageUrl:string= 'https://wallpapercave.com/wp/wp12067729.jpg'
  @Input() title = 'Invincible'
  @Input() description = 'Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.\n'
}
