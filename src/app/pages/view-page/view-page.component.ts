import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  id: string;
  // @ts-ignore
  videoUrl: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.id = '974635'; // Default value if no route parameter is provided
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '974635'; // Set id from route parameter or use default
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://vidsrc.net/embed/${this.id}`);
      console.log(this.id);
    });
  }
}
