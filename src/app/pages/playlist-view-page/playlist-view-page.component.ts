import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../services/playlist-service/playlist.service";
import {AuthService} from "../../services/auth-service/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DateConverter} from "../../functions/dateConversion";
import {fadeInOut} from "../../animations/fade-animation";

@Component({
  selector: 'app-playlist-view-page',
  templateUrl: './playlist-view-page.component.html',
  styleUrl: './playlist-view-page.component.css',
  animations:[fadeInOut]
})

export class PlaylistViewPageComponent implements OnInit {
  data:any = []
  selectedIndex= new Set();
  isInSelectMode = false
  deleteState = false
  isContentLoading = false;
  isInfoLoading = false;
  isOwner = false;
  title = '';
  description = '';
  username = '';
  sortedBy = 3;
  isReversed = false;
  search = ''
  onSubscribeTimeout= false
  saveID = null
  isPublic = true



  ngOnInit(){
    this.isContentLoading = true;
    this.isInfoLoading = true;
    setTimeout(()=>{
      this.getPlaylist()
    },0)
    const id = this.route.snapshot.paramMap.get('id');
    let playlistTable:any = localStorage.getItem("playlist" + id);
    playlistTable = JSON.parse(playlistTable);
    if(playlistTable){
      this.isReversed = !playlistTable.isReversed;
      this.sortedBy = playlistTable.sortedBy;
    }

  }
  getPlaylist(){
    const playlistId = this.route.snapshot.paramMap.get('id');
    this.playlistService.getPlaylist(Number(playlistId), {userID:Number(this.authService.getUser())})
      .subscribe((res:any) =>{
        this.isInfoLoading = false;
        console.log();
        const data = res.playlist[0]
        this.isOwner = data.userid === this.authService.getUser();
        if(!this.isOwner && !data.ispublic){
          this.isContentLoading = false;
          this.isPublic = data.ispublic;
          return
        }
        this.title = data.title;        this.description = data.description;
        this.username = data.username;
        this.saveID = data.saveid
        console.log(res)
        this.getPlaylistContent()
    })
  }
  getPlaylistContent(){
    const playlistId = this.route.snapshot.paramMap.get('id');
    this.playlistService.getPlaylistContent(Number(playlistId))
      .subscribe((result:any)=>{
        console.log("result",result);
        this.data = result.sort((a:any, b:any) => a.name - b.name);
        console.log("result",);
        this.isContentLoading = false;
        this.changeSort(this.sortedBy)
      },error =>this.isContentLoading = false)
  }
  toggleDeleteState(){
    this.deleteState = !this.deleteState;
  }
  deleteContent(){
    const myArray = Array.from(this.selectedIndex);
    for(let i=0;i<myArray.length;i++){
      const id = this.data[i].id
      console.log(id)
      this.playlistService.deletePlaylistContent(Number(id)).subscribe()

      this.data.splice(i, 1);
      this.selectedIndex.delete(i)
      // i--;
    }
    this.toggleDeleteState()
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
  changeSort(num:number){

    if(num !== this.sortedBy)
      this.isReversed = false;
    else
      this.isReversed = !this.isReversed;
  switch(num){
    case 1:
      this.data = [...this.data.sort((a:any, b:any) => !this.isReversed ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))];
      break;
    case 2:
      this.data = [...this.data.sort((a:any, b:any) => !this.isReversed ? a.rating - b.rating : b.rating - a.rating)];
      break;
    case 3:
      this.data = [...this.data.sort((a:any, b:any) => this.isReversed ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime() : new Date(a.created_at).getTime() - new Date(b.created_at).getTime())];
      break;
  }

    this.sortedBy = num;

    const id = this.route.snapshot.paramMap.get('id');
    localStorage.setItem('playlist' + id, JSON.stringify({sortedBy:this.sortedBy,isReversed:this.isReversed}));
  }

  getList(){
    return this.data.filter((item:any) => item.name.toLowerCase().includes(this.search.toLowerCase()));
  }
  onSubscribe(){
    if(!this.isOwner && !this.isPublic)
      return
    if(this.onSubscribeTimeout)
      return
    const playlistID = this.route.snapshot.paramMap.get('id');
    const userID = this.authService.getUser()
    const credential = {playlistID,userID}
    this.onSubscribeTimeout = true;
    if(this.saveID){
      this.playlistService.deletePlaylistSave(Number(this.saveID)).subscribe((res)=>{
        this.saveID = null
        this.onSubscribeTimeout = false
      },error=>{this.onSubscribeTimeout = false})
    }else{
      this.playlistService.postPlaylistSave(credential).subscribe((res:any)=>{
        console.log(res)
        this.onSubscribeTimeout = false
        this.saveID = res.newID;
      },error=>{this.onSubscribeTimeout = false})
    }




  }

  constructor(private playlistService: PlaylistService,private authService: AuthService,private route: ActivatedRoute,private router:Router) {
  }

  protected readonly DateConverter = DateConverter;
  protected readonly Array = Array;
}
