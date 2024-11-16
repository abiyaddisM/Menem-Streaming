import {Component, EventEmitter, Input, Output} from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";

@Component({
  selector: 'app-create-playlist-dialog',
  templateUrl: './create-playlist-dialog.component.html',
  styleUrl: './create-playlist-dialog.component.css',
  animations:[fadeInOut]
})
export class CreatePlaylistDialogComponent {
  title: string= '';
  description: string= '';
  isPublic = true
  @Input() state = true;
  @Output() create = new EventEmitter();
  @Output() cancel = new EventEmitter();

  onCancel(){
    this.cancel.emit();
  }
  onCreate(){
    if(this.title === '' || this.description === '')
      return
    this.create.emit({title:this.title,description:this.description,isPublic:this.isPublic});
    this.title = ''
    this.description = ''
    this.isPublic = true
    this.cancel.emit();
  }
  toggleVisibility(){
    this.isPublic = !this.isPublic
  }
}
