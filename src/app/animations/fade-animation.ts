import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition('void => *',[
    style({opacity: 0}),
    animate(200)
  ]),
  transition('* => void',[
    animate(200,style({opacity: 0}) )
  ])
]);

