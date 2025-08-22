import { FadeInDirective } from './fade-in.directive';
import { ElementRef } from '@angular/core';

describe('FadeInDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {
      nativeElement: document.createElement('div'),
    } as ElementRef;
    const directive = new FadeInDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
