import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {GetTvDetailService} from "../../services/GET/get-tv-detail.service";
import {GetMovieDetailService} from "../../services/GET/get-movie-detail.service";
import {SearchHistoryService} from "../../services/search-history.service";

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit,AfterViewInit {
  // @ts-ignore
  @ViewChild('elementRef', { static: false }) elementRef: ElementRef;
  // @ts-ignore
  elementHeight: number;
  // @ts-ignore
  id: string;
  // @ts-ignore
  mediaType:string;
  // @ts-ignore
  videoUrl: SafeResourceUrl;
  // @ts-ignore
  backdropImg:string
  // @ts-ignore
  season = ''
  // @ts-ignore
  episode = ''
  // @ts-ignore
  details:any
  // @ts-ignore
  latestAirDate:string
  // @ts-ignore
  numberOfSeasons = 0
  // @ts-ignore
    showInfo:showFormat[]
  // @ts-ignore
  selectedValue: string = '1';

  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private getTvDetail:GetTvDetailService,
              private getMovieDetail:GetMovieDetailService,
              private searchHistory:SearchHistoryService,
              private router:Router) {
  }

  ngOnInit() {
   this.getPrams()
  }
  ngAfterViewInit() {
    if (this.elementRef.nativeElement) {
      this.elementHeight = this.elementRef.nativeElement.offsetHeight;
      console.log('Element height:', this.elementHeight);
    }
  }
  getPrams(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || ''; // Set id from route parameter or use default
      this.mediaType = params.get('mediaType') || '';
      this.season = params.get('season') || '';
      this.episode = params.get('episode') || '';
      this.selectedValue = this.season
      if(this.season === '0' && this.mediaType === 'tv')
        this.router.navigate(['/view','tv',this.id,'1','1'])
      if(this.mediaType === 'tv'){
        // this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidsrc.net/embed/${this.mediaType}/${this.id}/${this.season}/${this.episode}`);
        // this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidsrc.net/embed/${this.mediaType}/${this.id}`);
        this.tvDetail()
      }
      else{
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidsrc.net/embed/${this.mediaType}/${this.id}`);
        this.movieDetail()
      }
    });
  }
  tvDetail(){
    this.getTvDetail.getTvDetail(this.id).subscribe((res:any)=>{
      this.searchHistory.addToHistory(res,'tv')
      this.backdropImg = res.backdrop_path;
      this.numberOfSeasons = res.number_of_seasons;
      this.showInfo = new Array<showFormat>(this.numberOfSeasons).fill({
        season: '',
        episode:[]
      });
      this.latestAirDate = res.last_air_date
      for (let i = 0; i < this.numberOfSeasons; i++) {
        this.tvSeasonDetail((i + 1).toString(),i);
      }
    })
  }
  movieDetail(){
    this.details = this.getMovieDetail.getMovieDetail(this.id).subscribe((res:any)=>{
      this.backdropImg = res.backdrop_path;
      this.searchHistory.addToHistory(res,'movie')
    })
  }

  tvSeasonDetail(season:string,i:number){
    this.getTvDetail.getTvSeasonDetail(this.id,season).subscribe((res:any) =>{
      this.showInfo[i] = ({season:season,episode:res.episodes})
      // console.log(res)
    })
  }
  getSelected(){
    return parseInt(this.selectedValue)
  }

  protected readonly Array = Array;

}
interface showFormat{
  season:string,
  episode:any[]
}
type showFormatType = {
  showInfo: showFormat[];
};
