import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Experience } from '../../../../../core/models/experience';
import { FadeInDirective } from '../../../../../core/directives/fade-in.directive';

import { TagComponent } from '../../../../../shared/components/tag/tag.component';

@Component({
  selector: 'app-cv-experience-item',
  imports: [CommonModule, TagComponent, FadeInDirective],
  templateUrl: './cv-experience-item.component.html',
  styleUrl: './cv-experience-item.component.css'
})
export class CvExperienceItemComponent {
  @Input() experienceItem!: Experience;

}
