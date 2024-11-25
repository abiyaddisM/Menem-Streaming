import {Component, OnInit} from '@angular/core';
import {NgIconComponent, provideIcons, provideNgIconsConfig} from '@ng-icons/core';
import {saxAlarmOutline} from '@ng-icons/iconsax/outline'
import {NgIf} from "@angular/common";

import { TransparentButtonComponent } from '../../components/buttons/transparent-button/transparent-button.component';
import {fadeInOut} from "../../animations/fade-animation";
import {AuthService} from "../../services/auth-service/auth-service.service";
import {PlaylistService} from "../../services/playlist-service/playlist.service";

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css'],
  animations:[fadeInOut]

})
export class PlaylistPageComponent implements OnInit{
  isLoading = false

  constructor(private authService: AuthService,private playlistService:PlaylistService) {
  }
  ngOnInit() {
    this.isLoading = true
      this.playlistService.getUserPlaylist(this.authService.getUser())
        .subscribe(
          (res:any)=>{
            this.data = res.playlist
            this.data.map((data:any)=>{
              data.saveid = Number(data.saveid)
              data.userid = Number(data.userid)
              data.id = Number(data.id)
              this.isLoading = false
              data['isSelected'] = false;
            })
            console.log(this.data)

          },error => this.isLoading = false
        )
  }

  data:any = [];
  isInSelectMode = false
  deleteState = false
  createPlaylistState = false

    toggleSelectMode(){
      this.isInSelectMode = !this.isInSelectMode;
    }
    toggleDeleteState(){
      this.deleteState = !this.deleteState;
    }
    toggleCreatePlaylistState(){
      this.createPlaylistState = !this.createPlaylistState;
    }
    deletePlaylist(){
      for (let i = 0; i < this.data.length; i++) {
        if(this.data[i].isSelected){
          this.playlistService.deletePlaylist(this.data[i].id).subscribe(error=>{
            console.log(error)
          })
          this.data.splice(i, 1);
          i--;
        }
      }
      this.toggleDeleteState();
      console.log(this.data);
    }
    createPlaylist(event:any){
      this.data.push(event)
      const credentials = {
        title:event.title,
        description:event.description,
        isPublic:event.isPublic,
        userID:this.authService.getUser(),
        image:null
      }
      this.playlistService.postPlaylist(credentials)
        .subscribe(
          (res:any) =>{
            this.data[this.data.length - 1]['id'] = res.id
            console.log(res);
          },
          error =>{
            this.data.pop()
          }
        )

    }
  toggleSelected(index:number,data:boolean) {
    this.data[index].isSelected = !this.data[index].isSelected;
  }

  protected readonly Array = Array;
  protected readonly Math = Math;
}
interface playlistService {
  title: string;
  description: string;
  isPublic: boolean;
  userID: number;
  image:string;
}
