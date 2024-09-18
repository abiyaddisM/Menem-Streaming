import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {GetTvDetailService} from "../../services/GET/get-tv-detail.service";
import {GetMovieDetailService} from "../../services/GET/get-movie-detail.service";
import {SearchHistoryService} from "../../services/search-history-service/search-history.service";
import { format } from 'date-fns';
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
        this.mediaType = 'movie'
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidsrc.net/embed/${this.mediaType}/${this.id}`);
        this.movieDetail()
    });
  }

  movieDetail(){
    this.details = this.getMovieDetail.getMovieDetail(this.id).subscribe((res:any)=>{
      this.backdropImg = res.backdrop_path;
      this.searchHistory.addToHistory(res,'movie')
    })
  }


  getSelected(){
    return parseInt(this.selectedValue)
  }
  formatDate(dateString: string): string {
    return format(new Date(dateString), 'dd MMM yyyy');
  }


  protected readonly Array = Array;

}

