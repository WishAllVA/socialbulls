import {
    style,
    animate,
    animation,
    keyframes
} from "@angular/animations";


// =========================
// Fade
// =========================
export const fadeIn = animation([
    style({ opacity: 0, transform: 'translateX(0)' }), // start state
    animate('{{time}}', style({ opacity: 1 }))
]);

export const fadeOut = animation([
    animate('{{time}}', style({ opacity: 0 }))
]);

export const slideIn = animation([
    style({ opacity: 0, transform: 'translateX(0)' }), // start state
    animate('{{time}}', style({ opacity: 1, transform: 'translateX(-100%)' }))
]);

export const slideOut = animation([
    animate('{{time}}', style({ opacity: 0, transform: 'translateX(0)' }))
]);