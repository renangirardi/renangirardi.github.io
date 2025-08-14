import { Component, Input } from '@angular/core';
import { Education } from '../../../core/models/education';

@Component({
  selector: 'app-about-education-item',
  imports: [],
  templateUrl: './about-education-item.component.html',
  styleUrl: './about-education-item.component.css'
})
export class AboutEducationItemComponent {
  @Input() educationItem!: Education;
}
