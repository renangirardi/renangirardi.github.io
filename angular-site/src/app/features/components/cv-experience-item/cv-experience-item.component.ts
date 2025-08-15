import { Component, Input } from '@angular/core';
import { Experience } from '../../../core/models/experience';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-cv-experience-item',
  imports: [CommonModule, TagComponent],
  templateUrl: './cv-experience-item.component.html',
  styleUrl: './cv-experience-item.component.css'
})
export class CvExperienceItemComponent {
  @Input() experienceItem!: Experience;

}
