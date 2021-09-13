import {
    style,
    animate,
    animation,
    keyframes
} from "@angular/animations";


export const slideIn = animation([
    style({ opacity: 0, transform: 'translateX(-100%)' }), // start state
    animate('{{time}}', style({ opacity: 1, transform: 'translateX(0)' }))
]);

export const slideOut = animation([
    animate('{{time}}', style({ opacity: 0, transform: 'translateX(0)' }))
]);