import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.css'
})
export class PlaylistCardComponent {
  @Input() id = 0;
  @Input() src = 'assets/Images/default-cover.png';
  @Input() title = '';
  @Input() description = '';
  @Input() isInSelectMode = false;
  @Input() isSelected = false;
  @Output() onSelected = new EventEmitter();
  toggleSelected(){
    if (!this.isInSelectMode)
      return
    this.onSelected.emit();
  }
}
