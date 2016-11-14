import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[autofocus]' })

export class AutoFocusDirective {
    constructor(el: ElementRef) {
       el.nativeElement.focus();
    }
}