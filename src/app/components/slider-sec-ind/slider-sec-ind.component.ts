import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-slider-sec-ind',
  templateUrl: './slider-sec-ind.component.html',
  styleUrls: ['./slider-sec-ind.component.css']
})
export class SliderSecIndComponent {
  @Input() size = 4
  getArray(size: number): any[] {
    return new Array(size);
  }
  @Input() active = 0
  activeSlide(current: number): boolean{
    return current === this.active;
  }
}
