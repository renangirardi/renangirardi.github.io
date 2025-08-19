import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Experience } from '../../../../core/models/experience';

import { ExperienceService } from '../../../../core/services/experience.service';

import { CvExperienceItemComponent } from './cv-experience-item/cv-experience-item.component';

@Component({
  selector: 'app-cv-experience',
  imports: [CommonModule, CvExperienceItemComponent],
  templateUrl: './cv-experience.component.html',
  styleUrl: './cv-experience.component.css'
})
export class CvExperienceComponent {
  experienceItems!: Experience[];

  constructor(private experienceService: ExperienceService) {
    this.experienceItems = this.experienceService.getExperienceItems();
  }
}
