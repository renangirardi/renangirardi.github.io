import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as simpleIcons from 'simple-icons';
import { simpleIconsSlugs } from './../../../core/utils/simple-icons-slugs/simple-icons-slugs';

@Component({
  selector: 'app-simple-icons',
  imports: [CommonModule],
  templateUrl: './simple-icons.component.html',
  styleUrl: './simple-icons.component.css',
})
export class SimpleIconsComponent {
  @Input() iconName: string = ''; // ex: "siNodedotjs"
  @Input() size: number = 40;
  @Input() color?: string;

  get icon() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (simpleIcons as any)[simpleIconsSlugs[this.iconName]];
  }
}
