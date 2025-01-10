import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {GetTvDetailService} from "../../services/GET/get-tv-detail.service";
import {GetMovieDetailService} from "../../services/GET/get-movie-detail.service";
import {SearchHistoryService} from "../../services/search-history-service/search-history.service";
import { format } from 'date-fns';
import {MediaProgressService} from "../../services/media-progress-service/media-progress.service";
@Component({
  selector: 'app-movie-view-page',
  templateUrl: './movie-view-page.component.html',
  styleUrls: ['./movie-view-page.component.css']
})
export class MovieViewPageComponent {
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
  details:any
  // @ts-ignore
  latestAirDate:string
  // @ts-ignore
  selectedValue: string = 'Movie';
  title = ''
  rating = 0
  poster = ''


  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private getTvDetail:GetTvDetailService,
              private getMovieDetail:GetMovieDetailService,
              private mediaProgress:MediaProgressService,
              private searchHistory:SearchHistoryService,
              private router:Router) {
  }


  ngOnInit() {
    this.getPrams()
  }
  ngAfterViewInit() {
    if (this.elementRef.nativeElement) {
      this.elementHeight = this.elementRef.nativeElement.offsetHeight;
    }
  }
  getPrams(){
      this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || ''; // Set id from route parameter or use default
        this.mediaType = 'movie'
        // this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidsrc.net/embed/${this.mediaType}/${this.id}`);
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidlink.pro/${this.mediaType}/${this.id}`);
        this.movieDetail()
    });
  }

  movieDetail(){
    this.details = this.getMovieDetail.getMovieDetail(this.id).subscribe((res:any)=>{
      this.backdropImg = res.backdrop_path;
      console.log(res);
      this.rating = Number(res.vote_average);
      this.title = this.checkTitle(res);
      this.poster = res.poster_path;
      this.searchHistory.addToHistory(res,'movie')
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

  getSelected(){
    return parseInt(this.selectedValue)
  }
  formatDate(dateString: string): string {
    return format(new Date(dateString), 'dd MMM yyyy');
  }
  state = false

  onDialogOpen(){
    this.state = true
  }
  onDialogClose(){
    this.state = false
  }
  protected readonly Array = Array;

  protected readonly Number = Number;
}

