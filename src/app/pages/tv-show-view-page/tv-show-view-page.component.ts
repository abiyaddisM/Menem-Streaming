import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {GetTvDetailService} from "../../services/GET/get-tv-detail.service";
import {GetMovieDetailService} from "../../services/GET/get-movie-detail.service";
import {SearchHistoryService} from "../../services/search-history-service/search-history.service";
import {format} from "date-fns";

@Component({
  selector: 'app-tv-show-view-page',
  templateUrl: './tv-show-view-page.component.html',
  styleUrls: ['./tv-show-view-page.component.css']
})
export class TvShowViewPageComponent implements OnInit{
  // @ts-ignore
  @ViewChild('elementRef', { static: false }) elementRef: ElementRef;
  elementHeight = 0;
  id = '';
  mediaType = '';
  videoUrl: SafeResourceUrl = '';
  backdropImg = ''
  season = ''
  episode = ''
  latestAirDate:string =new Date().toISOString().split('T')[0];
  numberOfSeasons = 0
  showInfo:showFormat[] = []
  selectedValue: string = '1';
  title = ''
  rating = 0
  poster = ''
  description = ''
  date = ''
  network = []
  genre = []
  // @ts-ignore
  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private getTvDetail:GetTvDetailService,
              private getMovieDetail:GetMovieDetailService,
              private searchHistory:SearchHistoryService,
              private router:Router) {
  }
  ngOnInit() {
    this.getPrams()
    this.routeSub = this.route.params.subscribe(params => {
      this.reloadComponent();
    });
  }
  reloadComponent(){

  }
  ngAfterViewInit() {
    if (this.elementRef.nativeElement) {
      this.elementHeight = this.elementRef.nativeElement.offsetHeight;
      console.log('Element height:', this.elementHeight);
    }
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    if (this.elementRef.nativeElement) {
      this.elementHeight = this.elementRef.nativeElement.offsetHeight;
      console.log('Element height:', this.elementHeight);
    }
  }
  getPrams(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || ''; // Set id from route parameter or use default
      this.route.queryParams.subscribe(params => {
        this.season = params['season'];
        this.episode = params['episode'];
      });
      this.mediaType = "tv"
      this.selectedValue = this.season
      this.season === '0' && this.router.navigate(['/view','tv',this.id,'1','1'])

      this.tvDetail()
    });
  }
  tvDetail(){
    this.getTvDetail.getTvDetail(this.id)
      .subscribe((res:any)=>{
        console.log('Tv results',res);
      this.searchHistory.addToHistory(res,'tv')
      this.backdropImg = res.backdrop_path;
      this.numberOfSeasons = res.number_of_seasons;
      this.showInfo = new Array<showFormat>(this.numberOfSeasons).fill({
        season: '',
        episode:[]
      });
      // this.latestAirDate = res.last_air_date
      console.log(this.latestAirDate)
      for (let i = 0; i < this.numberOfSeasons; i++) {
        this.tvSeasonDetail((i + 1).toString(),i);
      }
        this.rating = Number(res.vote_average);
        this.title = this.checkTitle(res);
        this.poster = res.poster_path;
        this.description = res.overview;
        this.date = res.first_air_date;
        this.network = res.networks;
        this.genre = res.genres.map((res:any)=>res.id)


    })
  }
  tvSeasonDetail(season:string,i:number){
    this.getTvDetail.getTvSeasonDetail(this.id,season).subscribe((res:any) =>{
      this.showInfo[i] = ({season:season,episode:res.episodes})
      // console.log(res)
    })
  }
  checkTitle(data:any){
    if (data.hasOwnProperty('name'))
      return data.name;
    else if(data.hasOwnProperty('title'))
      return data.title;
    else
      return data.original_name;
  }

  protected readonly Array = Array;
  protected readonly parseInt = parseInt;
  state = false

  onDialogOpen(){
    this.state = true
  }
  onDialogClose(){
    this.state = false
  }
  infoState = false

  onInfoDialogOpen(){
    this.infoState = true
  }
  onInfoDialogClose(){
    this.infoState = false
  }

  protected readonly Number = Number;
}
interface showFormat{
  season:string,
  episode:any[]
}
type showFormatType = {
  showInfo: showFormat[];
};
