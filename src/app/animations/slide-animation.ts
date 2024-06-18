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

export const slideRightOut = trigger('slideRightOut',[
  transition('* => void', [
    animate('400ms ease-out', style({ transform: 'translateX(600px)'}))
  ])
]);
export const slideLeftOut = trigger('slideLeftOut',[
  transition('* => void', [
    animate('400ms ease-out', style({ transform: 'translateX(-600px)'}))
  ])
]);
export const slideRightIn = trigger('slideRightIn',[
  transition('void => *', [
    style({ transform: 'translateX(-600px)'}),
    animate('400ms ease-in', style({ transform: 'translateX(0)'}))
  ])
]);
