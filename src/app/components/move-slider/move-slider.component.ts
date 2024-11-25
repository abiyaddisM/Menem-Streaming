import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-move-slider',
  templateUrl: './move-slider.component.html',
  styleUrls: ['./move-slider.component.css']
})
export class MoveSliderComponent implements AfterViewInit{
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>
  slides = [
    {img:'https://image.tmdb.org/t/p/original/5zmiBoMzeeVdQ62no55JOJMY498.jpg',poster:'/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg',rating:8.5,id:'126308',genre:['28','36'],date:'2024',length:'1 Season',mediaType:'tv',title:'Shōgun',description:'In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.'},
    {img:'https://image.tmdb.org/t/p/original/dfmPbyeZZSz3bekeESvMJaH91gS.jpg',poster:'/dMOpdkrDC5dQxqNydgKxXjBKyAc.jpg',rating:8.6,id:'95557',genre:['28','16'],date:'2021',length:'2 Season',mediaType:'tv',title:'Invincible',description:'Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.'},
    {img:'https://image.tmdb.org/t/p/original/41neXsH222hV2zrsTyw8h7javon.jpg',poster:'/xJnbMTrJ2fl1AXAKx34U4BPvOhs.jpg',rating:8.3,id:'2190',genre:['16','35'],date: '1997',length:'26 Season',mediaType:'tv',title:'South Park',description:'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.'},
    {img:'https://image.tmdb.org/t/p/original/xMNH87maNLt9n2bMDYeI6db5VFm.jpg',poster:'/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg',rating:8.5,id:'127532',genre:['16','14'],date:'2024',length:'1 Season',mediaType:'tv',title:'Solo Leveling',description:'They say whatever doesn’t kill you makes you stronger, but that’s not the case for the world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers and the dungeon that spawned them.'},
    {img:'https://image.tmdb.org/t/p/original/bI37vIHSH7o4IVkq37P8cfxQGMx.jpg',poster:'/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg',rating:8.4,id:'76479',genre:['28','35'],date:'2019',length:'4 Season',mediaType:'tv',title:'The Boys',description:'A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.'}];

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
