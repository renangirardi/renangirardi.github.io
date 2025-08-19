import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner-banner',
  imports: [],
  templateUrl: './inner-banner.component.html',
  styleUrl: './inner-banner.component.css'
})
export class InnerBannerComponent {
  @Input() title!: string;
}
