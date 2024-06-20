import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {GetTvDetailService} from "../../services/GET/get-tv-detail.service";
import {GetMovieDetailService} from "../../services/GET/get-movie-detail.service";

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
  numberOfSeasons = 0
  // @ts-ignore
    showInfo:showFormat[]
  // @ts-ignore
  selectedValue: string = '1';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer,private getTvDetail:GetTvDetailService,private getMovieDetail:GetMovieDetailService) {
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
      if(this.mediaType === 'tv'){
        // this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidsrc.net/embed/${this.mediaType}/${this.id}/${this.season}/${this.episode}`);
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidsrc.net/embed/${this.mediaType}/${this.id}`);
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
      console.log(res)
      this.backdropImg = res.backdrop_path;
      this.numberOfSeasons = res.number_of_seasons;
      this.showInfo = new Array<showFormat>(this.numberOfSeasons).fill({
        season: '',
        episode:[]
      });
      for (let i = 0; i < this.numberOfSeasons; i++) {
        this.tvSeasonDetail((i + 1).toString(),i);
      }
    })
  }
  movieDetail(){
    this.details = this.getMovieDetail.getMovieDetail(this.id).subscribe((res:any)=>{
      this.backdropImg = res.backdrop_path;
    })
  }

  tvSeasonDetail(season:string,i:number){
    this.getTvDetail.getTvSeasonDetail(this.id,season).subscribe((res:any) =>{
      this.showInfo[i] = ({season:season,episode:res.episodes})
      console.log(res)
    })
  }
  onSelectChange() {
    console.log(this.selectedValue); // Log the selected value to console
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
