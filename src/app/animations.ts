import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '500px',
            'opacity': '1',
            'visibility': 'visible',
            'margin-top': '10px'
        })),
        state('out', style({
            'max-height': '0px',
            'opacity': '0',
            'visibility': 'hidden',
            'margin-top': '0px'
        })),
        transition('in => out', [group([
            animate('300ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('450ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('550ms ease-in-out', style({
                'visibility': 'hidden'
            })),
            animate('220ms ease-in-out', style({
                'margin-top': '0px'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('400ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('600ms ease-in-out', style({
                'opacity': '1'
            })),
            animate('100ms ease-in-out', style({
                'margin-top': '10px'
            }))
        ]
        )])
    ]),
];
