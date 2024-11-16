import {Component, Input} from '@angular/core';
import {getGenreName} from "../../functions/genreConvert";

@Component({
  selector: 'app-mini-info',
  templateUrl: './mini-info.component.html',
  styleUrls: ['./mini-info.component.css']
})
export class MiniInfoComponent {
  @Input() miniInfo = ['28','16'];
  @Input() size = 15;
  @Input() sizeOfGenre = 2;
  @Input() rating = -1
  @Input() subtract = 0
  @Input() time = ''
  @Input() year = ''
  checkRating():boolean{
    return this.rating > -1
  }
  sizeMinTwo(num:number):number{
    return this.size - this.subtract;
  }

  protected readonly Math = Math;
  getGenreName = getGenreName

}

