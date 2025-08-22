import { FadeInDirective } from './fade-in.directive';
import { ElementRef } from '@angular/core';

describe('FadeInDirective', () => {
  let element: HTMLDivElement;
  let elementRef: ElementRef;
  let directive: FadeInDirective;

  // Mock IntersectionObserver
  class MockIntersectionObserver implements IntersectionObserver {
    public root: Element | Document | null = null;
    public rootMargin: string = '';
    public thresholds: ReadonlyArray<number> = [];
    constructor(
      public callback: IntersectionObserverCallback,
      public options?: IntersectionObserverInit,
    ) {}
    observe = jasmine.createSpy('observe');
    unobserve = jasmine.createSpy('unobserve');
    disconnect = jasmine.createSpy('disconnect');
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
    trigger(entries: Partial<IntersectionObserverEntry>[]) {
      this.callback(
        entries as IntersectionObserverEntry[],
        this as unknown as IntersectionObserver,
      );
    }
  }

  beforeEach(() => {
    element = document.createElement('div');
    elementRef = { nativeElement: element } as ElementRef;
    (window as Window & typeof globalThis).IntersectionObserver =
      MockIntersectionObserver;
    directive = new FadeInDirective(elementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should initialize and observe the element on ngOnInit', () => {
    directive.ngOnInit();
    expect(directive['observer']).toBeDefined();
    expect(directive['observer'].observe).toHaveBeenCalledWith(element);
  });

  it('should add class and unobserve when entry is intersecting', () => {
    directive.ngOnInit();
    const observer = directive[
      'observer'
    ] as unknown as MockIntersectionObserver;
    expect(element.classList.contains('element')).toBeFalse();
    observer.trigger([{ isIntersecting: true, target: element }]);
    expect(element.classList.contains('element')).toBeTrue();
    expect(observer.unobserve).toHaveBeenCalledWith(element);
  });

  it('should not add class or unobserve when entry is not intersecting', () => {
    directive.ngOnInit();
    const observer = directive[
      'observer'
    ] as unknown as MockIntersectionObserver;
    observer.trigger([{ isIntersecting: false, target: element }]);
    expect(element.classList.contains('element')).toBeFalse();
    expect(observer.unobserve).not.toHaveBeenCalled();
  });

  it('should disconnect observer on ngOnDestroy', () => {
    directive.ngOnInit();
    const observer = directive[
      'observer'
    ] as unknown as MockIntersectionObserver;
    directive.ngOnDestroy();
    expect(observer.disconnect).toHaveBeenCalled();
  });

  it('should not throw if ngOnDestroy called before ngOnInit', () => {
    expect(() => directive.ngOnDestroy()).not.toThrow();
  });
});
