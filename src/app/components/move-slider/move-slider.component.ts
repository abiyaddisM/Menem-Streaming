import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-move-slider',
  templateUrl: './move-slider.component.html',
  styleUrls: ['./move-slider.component.css']
})
export class MoveSliderComponent implements AfterViewInit{
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>
  slides = [
    {by:'Nathan',img:'https://image.tmdb.org/t/p/original/sYXLeu5usz6yEz0k00FYvtEdodD.jpg',poster:'/abf8tHznhSvl9BAElD2cQeRr7do.jpg',rating:8.9,id:'94605',genre:['16','10759'],date:'2021',length:'2 Season',mediaType:'tv',title:'Arcane',description:'Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.'},
    {by:'Dev',img:'https://image.tmdb.org/t/p/original/1swj9HxDkjzsO3yHlSwRA38hMFN.jpg',poster:'/tslJx5LPn2aXX3USGYbh0KbglnB.jpg',rating:7.8,id:'123548',genre:['16','18'],date:'2024',length:'2 Season',mediaType:'tv',title:'Castlevania Nocturne',description:'In the thick of the French Revolution, members of the so-called lower classes are rising up to fight inequality. Meanwhile, Richter Belmont senses a far grimmer and greater danger. He\'s picked up his family\'s long-held tradition of vampire hunting, a vocation that goes back almost as long as a vampiric life span (in other words, forever) but he\'s never seen anything quite like what he\'s witnessing now.'},
    {by:'Naol',img:'https://image.tmdb.org/t/p/original/5C3UcPKVcg3rwGBYPE18wXpZMw8.jpg',poster:'/AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg',rating:8.2,id:'106379',genre:['18','80'],date:'2024',length:'1 Season',mediaType:'tv',title:'Fallout',description:'The story of haves and have-nots in a world in which there’s almost nothing left to have. 200 years after the apocalypse, the gentle denizens of luxury fallout shelters are forced to return to the irradiated hellscape their ancestors left behind — and are shocked to discover an incredibly complex, gleefully weird, and highly violent universe waiting for them.'},
    {by:'Brook',img:'https://image.tmdb.org/t/p/original/2m1Mu0xPj4SikiqkaolTRUcNtWH.jpg',poster:'/bL1mwXDnH5fCxqc4S2n40hoVyoe.jpg',rating:8.5,id:'79744',genre:['18','80'],date: '2018',length:'7 Season',mediaType:'tv',title:'The Rookie',description:'Starting over isn’t easy, especially for small-town guy John Nolan who, after a life-altering incident, is pursuing his dream of being an LAPD officer. As the force’s oldest rookie, he’s met with skepticism from some higher-ups who see him as just a walking midlife crisis.'},
    {by:'Mahlet',img:'https://image.tmdb.org/t/p/original/yvKrycViRMQcIgdnjsM5JGNWU4Q.jpg',poster:'/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg',rating:8.7,id:'1429',genre:['16','10759'],date:'2013',length:'4 Season',mediaType:'tv',title:'Attack on Titan',description:'Many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls – but even those brave warriors seldom returned alive. Those within the city clung to the illusion of a peaceful existence until the day that dream was shattered, and their slim chance at survival was reduced to one horrifying choice: kill – or be devoured!'},
  ];

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
