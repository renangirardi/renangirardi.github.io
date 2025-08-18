import { Component, Input } from '@angular/core';
import { Education } from '../../../core/models/education';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../../../shared/components/tag/tag.component';


@Component({
  selector: 'app-cv-education-item',
  imports: [CommonModule, TagComponent],
  templateUrl: './cv-education-item.component.html',
  styleUrl: './cv-education-item.component.css'
})
export class CvEducationItemComponent {
  @Input() educationItem!: Education;
}
