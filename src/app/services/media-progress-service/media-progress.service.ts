import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediaProgressService implements OnDestroy {
  private eventListener: (event: MessageEvent) => void;
  public data = {}

  constructor() {
    this.eventListener = this.handleMessage.bind(this);
    window.addEventListener('message', this.eventListener);
  }

  private handleMessage(event: MessageEvent): void {
    // Verify the origin
    if (event.origin !== 'https://vidlink.pro') {
      return;
    }

    // Check for the correct message type
    if (event.data && event.data.type === 'MEDIA_DATA') {
      const mediaData = event.data.data;

      // Save the media data to localStorage

      this.data = mediaData;
    }
  }
  public getData(id:any){
    // @ts-ignore
    return this.data[id];
  }
  ngOnDestroy(): void {
    // Remove the event listener when the service is destroyed
    window.removeEventListener('message', this.eventListener);
  }
}
