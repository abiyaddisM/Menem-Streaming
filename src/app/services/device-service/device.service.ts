import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor() {}

  isDesktop(): boolean {
    const width = window.innerWidth;
    const userAgent = navigator.userAgent.toLowerCase();

    // You can customize the conditions based on your requirements
    const isDesktop = width > 1024 && !/mobile|tablet|ip(ad|hone|od)|android|silk|kindle|opera mini|opera mobi|webos|windows phone|blackberry/i.test(userAgent);

    return isDesktop;
  }
}
