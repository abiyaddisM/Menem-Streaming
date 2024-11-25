import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../services/playlist-service/playlist.service";
import {AuthService} from "../../services/auth-service/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
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
  isContentLoading = false;
  isInfoLoading = false;
  isOwner = false;
  title = ''
  description = ''
  username = ''

  ngOnInit(){
    this.isContentLoading = true;
    this.isInfoLoading = true;
    setTimeout(()=>{
      this.getPlaylist()
    },0)
  }
  getPlaylist(){
    const playlistId = this.route.snapshot.paramMap.get('id');
    this.playlistService.getPlaylist(Number(playlistId)).subscribe((res:any) =>{
      this.isInfoLoading = false;
      console.log();
      const data = res.playlist[0]
      this.isOwner = data.userid === this.authService.getUser();
      this.title = data.title;
      this.description = data.description;
      this.username = data.username;
      console.log(this.isOwner)
        this.getPlaylistContent()
    })
  }
  getPlaylistContent(){
    const playlistId = this.route.snapshot.paramMap.get('id');
    this.playlistService.getPlaylistContent(Number(playlistId))
      .subscribe((result:any)=>{
        console.log("result",result);
        this.data = result;
        this.isContentLoading = false;
      },error =>this.isContentLoading = false)
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
    console.log(this.data)
    if(!this.isInSelectMode){
      if(this.data[index].content_type === 'tv')
        this.router.navigate(['/view', 'tv',this.data[index].content_id],{queryParams:{season:1,episode:1}})
      else
        this.router.navigate(['/view', 'movie',this.data[index].content_id])
      return
    }
    if(this.selectedIndex.has(index))
      this.selectedIndex.delete(index);
    else
      this.selectedIndex.add(index);
  }
  navigate(){


  }
  constructor(private playlistService: PlaylistService,private authService: AuthService,private route: ActivatedRoute,private router:Router) {
  }

  protected readonly DateConverter = DateConverter;
  protected readonly Array = Array;
}
