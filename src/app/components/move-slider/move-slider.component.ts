import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-move-slider',
  templateUrl: './move-slider.component.html',
  styleUrls: ['./move-slider.component.css']
})
export class MoveSliderComponent implements AfterViewInit{
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>
  slides = [
    {img:'https://image.tmdb.org/t/p/original/dfmPbyeZZSz3bekeESvMJaH91gS.jpg',id:'95557',mediaType:'tv',title:'Invincible',description:'Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.'},
    {img:'https://image.tmdb.org/t/p/original/41neXsH222hV2zrsTyw8h7javon.jpg',id:'2190',mediaType:'tv',title:'South Park',description:'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.'},
    {img:'https://image.tmdb.org/t/p/original/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg',id:'82856',mediaType:'tv',title:'The Mandalorian',description:'After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.'},
    {img:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/X-Men-Cropped.jpg',id:'138502',mediaType:'tv',title:'X-Men 97',description:'The X-Men, a band of mutants who use their uncanny gifts to protect a world that hates and fears them, are challenged like never before, forced to face a dangerous and unexpected new future.'},
    {img:'https://image.tmdb.org/t/p/original/zCjZfevPFBbOh2SAx2syIBHSqEI.jpg',id:'823464',mediaType:'movie',title:'Godzilla x Kong: The New Empire',description:'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.'}];

  currentSlide = 0;
  ngAfterViewInit() {
    // Initialize slider position
    this.autoScroll()
  }
  onScroll(event: Event): void {
    const size = this.slides.length;
    const slider = event.target as HTMLElement;
    const slideWidth = slider.clientWidth;
    const scrollLeft = slider.scrollLeft;
    const actualSlide = Math.round(scrollLeft / slideWidth);
    this.currentSlide = actualSlide % size;
    const maxScrollLeft = slideWidth * (size * 2 - 1);
    if (scrollLeft < slideWidth) {
      slider.scrollBy({
        left: slideWidth * size,
        behavior: 'instant'
      });
    } else if (scrollLeft >= maxScrollLeft) {
      slider.scrollBy({
        left: -(slideWidth * size),
        behavior: 'instant'
      });
    }
  }

  autoScroll() {
    setInterval(() => {
      const slider = this.sliderContainer.nativeElement;
      const slideWidth = slider.clientWidth;
      const scrollLeft = slider.scrollLeft;
      const slideCount = this.slides.length;

      const maxScrollLeft = slideWidth * (slideCount * 2 - 1);

      if (slider.scrollLeft + slideWidth >= maxScrollLeft) {
        slider.scrollLeft = slider.scrollLeft - slideWidth * slideCount;
      }

      slider.scrollBy({
        left: slideWidth,
        behavior: 'instant'
      });
    }, 3000);
  }

}
