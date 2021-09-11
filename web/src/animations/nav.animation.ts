import {
    style,
    animate,
    animation,
    keyframes
} from "@angular/animations";

export const fadeIn = animation([
    style({ opacity: 0, transform: 'translateX(50px)' }), // start state
    animate('{{time}}', style({ opacity: 1, transform: 'translateX(0)' }))
]);

export const fadeOut = animation([
    animate('{{time}}', style({ opacity: 0 }))
]);