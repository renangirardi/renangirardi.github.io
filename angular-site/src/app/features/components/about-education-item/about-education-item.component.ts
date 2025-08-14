import { Component, Input } from '@angular/core';
import { Education } from '../../../core/models/education';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-about-education-item',
  imports: [CommonModule, TagComponent],
  templateUrl: './about-education-item.component.html',
  styleUrl: './about-education-item.component.css'
})
export class AboutEducationItemComponent {
  @Input() educationItem!: Education;
}
