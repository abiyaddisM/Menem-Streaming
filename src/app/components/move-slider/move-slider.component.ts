import { Component } from '@angular/core';

@Component({
  selector: 'app-move-slider',
  templateUrl: './move-slider.component.html',
  styleUrls: ['./move-slider.component.css']
})
export class MoveSliderComponent {
  slides = [
    'https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2024/04/KINGDOM-OF-THE-PLANET-OF-THE-APES-Header.jpg?fit=3840%2C2160&ssl=1',
    'https://wallpapercave.com/wp/wp12067729.jpg',
    'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/X-Men-Cropped.jpg',
    'https://bleedingcool.com/wp-content/uploads/2024/03/godzilla-x-kong-feature-image-2-2000x1125.jpg'];

  currentSlide = 0;
  onScroll(event: Event): void {
    const slider = event.target as HTMLElement;
    const slideWidth = slider.clientWidth;
    const scrollLeft = slider.scrollLeft;
    this.currentSlide = Math.round(scrollLeft / slideWidth);
  }
}
