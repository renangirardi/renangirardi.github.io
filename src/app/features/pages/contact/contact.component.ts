import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { LoadingIndicatorComponent } from '../../../shared/components/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-contact',
  imports: [InnerBannerComponent, CommonModule, LoadingIndicatorComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements AfterViewInit {
  loading = true;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const observer = new MutationObserver(() => {
      const iframe = this.elementRef.nativeElement.querySelector('iframe');
      if (iframe) {
        iframe.onload = () => {
          iframe.style.width = '340px';
          iframe.style.height = '271px';
          this.loading = false;
        };
      }
    });

    observer.observe(this.elementRef.nativeElement, {
      childList: true,
      subtree: true,
    });
  }
}
