import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {format} from "date-fns";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MediaProgressService} from "../../services/media-progress-service/media-progress.service";

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements AfterViewInit,OnInit,OnDestroy{
  @Input() selectedValue: string = '1';
  @Input() numberOfSeasons = 1;
  @Input() showInfo:showFormat[] = [];
  @Input() season = '';
  @Input() episode = '';
  @Input() id = '';
  _videoUrl:SafeResourceUrl = ''
  @Input()
  get videoUrl(): SafeResourceUrl {
    return this._videoUrl;
  }
  set videoUrl(value: SafeResourceUrl) {
    this._videoUrl = value;
    this.videoUrlChange.emit(this._videoUrl);
  }
  @Output() videoUrlChange: EventEmitter<SafeResourceUrl> = new EventEmitter<SafeResourceUrl>();
  latestAirDate:string =new Date().toISOString().split('T')[0];
  touchedEpisode:any = {e1s1: ''}
  // @ts-ignore
  private routeSub: Subscription;
  constructor(private router:Router,private sanitizer:DomSanitizer,private route: ActivatedRoute, private  mediaProgressService: MediaProgressService) {
  }
  getSelected(){
    return parseInt(this.selectedValue)
  }
  formatDate(dateString: string): string {
    return format(new Date(dateString), 'dd MMM yyyy');
  }
  changeEpisode(episode:number){
    const data = this.mediaProgressService.getData(this.id).show_progress[`s${this.season}e${this.episode}`].progress;
    console.log("media",);
    if(data){
      const percent = Math.round((data.watched / data.duration ) * 100);
        this.changeTouchedEpisode(percent);
    }
    this.season = this.getSelected().toString();
    this.episode = episode.toString();
    this.router.navigate(['/view/tv', this.id],{queryParams: {season: this.season ,episode:this.episode}});
    this.changeLastSeen();
    this.setVideoUrl();
  }

  setVideoUrl(){
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidlink.pro/tv/${this.id}/${this.season}/${this.episode}`);
  }
  ngOnInit(){
    this.setData()
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.reloadComponent();

    });

    }
    setData(){
      let lastSeen:any = localStorage.getItem("last_seen_" + this.id);
      lastSeen = lastSeen ? JSON.parse(lastSeen) : {episode:this.episode,season:this.season};
      this.setLastSeen(lastSeen["season"],lastSeen["episode"])

      const touchedEpisodes = localStorage.getItem("touched_Episode" + this.id);
      this.touchedEpisode = touchedEpisodes ? JSON.parse(touchedEpisodes) : {[`e${this.episode}s${this.season}`]: ''};
    }
    setLastSeen(season:number,episode:number){
      this.season = season.toString()
      this.episode = episode.toString()
      this.selectedValue = season.toString()
    }
    changeLastSeen(){
    const lastSeen = {episode:this.episode,season:this.season};
    localStorage.setItem("last_seen_" + this.id,JSON.stringify(lastSeen));
    }
    changeTouchedEpisode(percent:number){
    const val = `e${this.episode}s${this.season}`
      this.touchedEpisode[val] = percent;
      localStorage.setItem("touched_Episode" + this.id,JSON.stringify(this.touchedEpisode));

    }
  reloadComponent(){
    this.setData()
    this.setVideoUrl()
  }

  ngAfterViewInit(){
    this.setVideoUrl()
  }
  ngOnDestroy() {
    const data = this.mediaProgressService.getData(this.id).show_progress[`s${this.season}e${this.episode}`].progress;
    if(data){
      const percent = Math.round((data.watched / data.duration ) * 100);
        this.changeTouchedEpisode(percent);
    }
  }
  checkIfWatched(episode:number,season:number){
    const name = 'e'+(episode + 1)+'s'+season;
    if(this.touchedEpisode.hasOwnProperty(name)){
      const percent = this.touchedEpisode[name];
      if(percent >= 90)
        return true
    }
    return false;
  }
  getWatchPercentage(episode:number,season:number){

    const name = 'e'+(episode + 1)+'s'+season;
    if(this.touchedEpisode.hasOwnProperty(name))
      return this.touchedEpisode[name];
    return 0;
  }

  protected readonly Array = Array;
    protected readonly parseInt = parseInt;
}

interface showFormat{
  season:string,
  episode:any[]
}
type showFormatType = {
  showInfo: showFormat[];
};
