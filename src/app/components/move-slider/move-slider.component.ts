import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-move-slider',
  templateUrl: './move-slider.component.html',
  styleUrls: ['./move-slider.component.css']
})
export class MoveSliderComponent implements AfterViewInit{
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>
  slides = [
    {img:'https://image.tmdb.org/t/p/original/5zmiBoMzeeVdQ62no55JOJMY498.jpg',id:'126308',mediaType:'tv',title:'Shōgun',description:'In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.'},
    {img:'https://image.tmdb.org/t/p/original/dfmPbyeZZSz3bekeESvMJaH91gS.jpg',id:'95557',mediaType:'tv',title:'Invincible',description:'Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.'},
    {img:'https://image.tmdb.org/t/p/original/41neXsH222hV2zrsTyw8h7javon.jpg',id:'2190',mediaType:'tv',title:'South Park',description:'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.'},
    {img:'https://image.tmdb.org/t/p/original/xMNH87maNLt9n2bMDYeI6db5VFm.jpg',id:'127532',mediaType:'tv',title:'Solo Leveling',description:'They say whatever doesn’t kill you makes you stronger, but that’s not the case for the world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers and the dungeon that spawned them.'},
    {img:'https://image.tmdb.org/t/p/original/bI37vIHSH7o4IVkq37P8cfxQGMx.jpg',id:'76479',mediaType:'tv',title:'The Boys',description:'A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.'}];

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
