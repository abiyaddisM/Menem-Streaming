import {Component, EventEmitter, Input, Output} from '@angular/core';
import {format} from "date-fns";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent {
  @Input() selectedValue: string = '1';
  @Input() numberOfSeasons = 1;
  @Input() showInfo:showFormat[] = [];
  @Input() season = '';

  _episode = '';
  @Input()
  get episode(): string {
    return this._episode;
  }

  set episode(value: string) {
    this._episode = value;
    this.episodeChange.emit(this._episode);
  }
  @Output() episodeChange: EventEmitter<string> = new EventEmitter<string>();

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
  @Input() id = '';
  latestAirDate:string =new Date().toISOString().split('T')[0];
  constructor(private router:Router,private sanitizer:DomSanitizer) {
  }
  getSelected(){
    return parseInt(this.selectedValue)
  }
  formatDate(dateString: string): string {
    return format(new Date(dateString), 'dd MMM yyyy');
  }
  changeEpisode(episode:number){
    this.season = this.getSelected().toString();
    this.episode = episode.toString();
    this.router.navigate(['/view/tv', this.id],{queryParams: {season: this.season ,episode:this.episode}});
    this.setVideoUrl();
  }
  setVideoUrl(){
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidsrc.net/embed/tv/${this.id}/${this.season}/${this.episode}`);
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
