import { Component, Input } from '@angular/core';

import { SimpleIconsComponent } from '../simple-icons/simple-icons.component';

@Component({
  selector: 'app-tag',
  imports: [SimpleIconsComponent],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css',
})
export class TagComponent {
  @Input() tag: string = '';
}
