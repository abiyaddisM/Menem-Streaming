import { trigger, transition, style, animate } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  transition('void => *', [
    style({ transform: 'translateX(-250px)'}),
    animate('200ms ease-in', style({ transform: 'translateX(0)'}))
  ]),
  transition('* => void', [
    animate('200ms ease-out', style({ transform: 'translateX(-250px)'}))
  ])
]);
