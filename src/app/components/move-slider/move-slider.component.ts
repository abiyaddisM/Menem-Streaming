import { Component } from '@angular/core';

@Component({
  selector: 'app-move-slider',
  templateUrl: './move-slider.component.html',
  styleUrls: ['./move-slider.component.css']
})
export class MoveSliderComponent {
  slides = [
    {img:'https://image.tmdb.org/t/p/original/dfmPbyeZZSz3bekeESvMJaH91gS.jpg',title:'Invincible',description:'Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.'},
    {img:'https://image.tmdb.org/t/p/original/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg',title:'The Mandalorian',description:'After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.'},
    {img:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/X-Men-Cropped.jpg',title:'X-Men 97',description:'The X-Men, a band of mutants who use their uncanny gifts to protect a world that hates and fears them, are challenged like never before, forced to face a dangerous and unexpected new future.'},
    {img:'https://image.tmdb.org/t/p/original/zCjZfevPFBbOh2SAx2syIBHSqEI.jpg',title:'Godzilla x Kong: The New Empire',description:'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.'}];

  currentSlide = 0;
  onScroll(event: Event): void {
    const slider = event.target as HTMLElement;
    const slideWidth = slider.clientWidth;
    const scrollLeft = slider.scrollLeft;
    this.currentSlide = Math.round(scrollLeft / slideWidth);
  }
}
