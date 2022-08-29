import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError():void{
    const native = this.host.nativeElement;
    console.log('AY MI MADRE');
    native.src = '../../../assets/images/img_broken.png';
  }

  constructor(private host: ElementRef) {

  }

}
