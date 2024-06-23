import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPreventMalvertisement]'
})
export class PreventMalvertisementDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent): void {
    const target = (event.target as HTMLElement).closest('a');
    if (target && (target as HTMLAnchorElement).target === '_blank') {
      if (this.isMalvertisement(target as HTMLAnchorElement)) {
        event.preventDefault();
        console.log('Blocked potential malvertisement:', (target as HTMLAnchorElement).href);
      }
    }
  }

  isMalvertisement(link: HTMLAnchorElement): boolean {
    // Implement your own logic to determine if the link is a malvertisement
    // Example: Check if the URL contains certain keywords or domains
    const malvertisementKeywords = ['malicious', 'suspicious', 'ads'];
    return malvertisementKeywords.some(keyword => link.href.includes(keyword));
  }
}
