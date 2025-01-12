import {Component, EventEmitter, Input, Output} from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";
import {PlaylistService} from "../../services/playlist-service/playlist.service";
import {AuthService} from "../../services/auth-service/auth-service.service";
import {GetMultiSearchService} from "../../services/GET/get-multi-search.service";

@Component({
  selector: 'app-add-to-playlist-dialog',
  templateUrl: './add-to-playlist-dialog.component.html',
  styleUrl: './add-to-playlist-dialog.component.css',
  animations:[fadeInOut]

})
export class AddToPlaylistDialogComponent {
  @Input() name = ''
  @Input() imagePath = ''
  @Input() contentID:number = 0
  @Input() rating:number = 0
  @Input() contentType = ''

  @Input() state = false;
  @Output() stateChange = new EventEmitter();
  isLoading = false
  isSending = false
  onClose(event: Event){
    if (event.target === event.currentTarget) {
      this.state = false;
      this.stateChange.emit();
    }
  }
  data:any = []
  ngOnInit(){
    this.isLoading = true;
    this.playlistService.getUserCreatedPlaylist(this.authService.getUser()).subscribe((res:any)=>{
      this.isLoading = false
      this.data = res.playlist;
    },error => this.isLoading = false)
  }
  constructor(private playlistService:PlaylistService,private authService: AuthService,private multiSearchService:GetMultiSearchService) {
  }
  addContent(id:number){
    this.isSending = true
    this.playlistService.postPlaylistContent(id,{name:this.name, imagePath:this.imagePath, contentID:this.contentID,contentType:this.contentType,rating:this.rating}).subscribe((res:any)=>{
      this.isSending = false
    },error => this.isSending = false)
  }

  protected readonly Array = Array;
}
