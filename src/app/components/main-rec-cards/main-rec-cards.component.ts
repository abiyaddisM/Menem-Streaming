import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-rec-cards',
  templateUrl: './main-rec-cards.component.html',
  styleUrls: ['./main-rec-cards.component.css']
})
export class MainRecCardsComponent {
  @Input() imageUrl:string= 'https://wallpapercave.com/wp/wp12067729.jpg'
  @Input() title = 'The Mandalorian'
  @Input() description = 'After the defeat of the Empire at the hands of Rebel forces, a lone bounty hunter operating in the Outer Rim, away from the dominion of the New Republic, goes on many surprising and risky adventures.\n'
}
