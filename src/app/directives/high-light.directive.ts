import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  standalone: true
})
export class HighLightDirective implements OnInit {

  /**
   * En nommant l'Input avec le même nom que la directive,
   * l'élément qui porte la directive peut directement binder cet input au passage.
   */
  @Input()
  public appHighLight?: string;

  /**
   * 
   * @param elementRef paramètre injecté par Angular. Contient l'élément portant la directive
   */
  constructor(private elementRef: ElementRef) {
  }

  /**
   * HostListener permet de s'abonne à un évenement JS qui a lieu sur l'élement portant la directive
   */
  @HostListener('click')
  private onClicked(): void {
    console.log('hightlight clicked!');
  }

  ngOnInit(): void {
    const color: string = this.appHighLight != null && this.appHighLight.length > 0 ?
      this.appHighLight :
      'yellow';
    (this.elementRef.nativeElement as HTMLElement).style.backgroundColor = color;

  }

}
