import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {Renderer} from '@angular/compiler-cli/ngcc/src/rendering/renderer';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'orange';
  constructor(private elref: ElementRef, private renderer: Renderer2) { }
 @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'aqua');
  }
  @HostListener('mouseenter') mouseover (eventData: Event) {
    //this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'palegreen');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    //this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'aqua');
    this.backgroundColor = this.defaultColor;
  }
}
