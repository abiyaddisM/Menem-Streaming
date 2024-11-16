import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../services/playlist-service/playlist.service";
import {AuthService} from "../../services/auth-service/auth-service.service";
import {ActivatedRoute} from "@angular/router";
import {DateConverter} from "../../functions/dateConversion";

@Component({
  selector: 'app-playlist-view-page',
  templateUrl: './playlist-view-page.component.html',
  styleUrl: './playlist-view-page.component.css'
})

export class PlaylistViewPageComponent implements OnInit {
  data:any = []
  selectedIndex=new Set();
  isInSelectMode = false
  deleteState = false

  ngOnInit(){
    const playlistId = this.route.snapshot.paramMap.get('id');
    this.playlistService.getPlaylistContent(Number(playlistId))
      .subscribe((result:any)=>{
        console.log("result",result);
        this.data = result;
      })
  }

  toggleDeleteState(){
    this.deleteState = !this.deleteState;
  }

  rightClick(event: MouseEvent,index:number){
    event.preventDefault();
    this.toggleSelectMode()
    this.select(index);

  }
  toggleSelectMode(){

    this.isInSelectMode = !this.isInSelectMode;
    !this.isInSelectMode && this.selectedIndex.clear()
  }
  select(index:number){
    if(!this.isInSelectMode)
      return
    if(this.selectedIndex.has(index))
      this.selectedIndex.delete(index);
    else
      this.selectedIndex.add(index);
  }
  constructor(private playlistService: PlaylistService,private authService: AuthService,private route: ActivatedRoute) {
  }

  protected readonly DateConverter = DateConverter;
}
