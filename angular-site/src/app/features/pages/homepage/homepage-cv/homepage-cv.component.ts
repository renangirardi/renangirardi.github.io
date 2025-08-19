import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Education } from '../../../../core/models/education';
import { Experience } from '../../../../core/models/experience';

import { EducationService } from '../../../../core/services/education.service';
import { ExperienceService } from '../../../../core/services/experience.service';

import { HomepageCvItemComponent } from './homepage-cv-item/homepage-cv-item.component';

@Component({
  selector: 'app-homepage-cv',
  imports: [RouterModule, HomepageCvItemComponent, CommonModule],
  templateUrl: './homepage-cv.component.html',
  styleUrl: './homepage-cv.component.css'
})
export class HomepageCvComponent {
  educationItems!: Education[];
  experienceItems!: Experience[];

  constructor(private educationService: EducationService, private experienceService: ExperienceService) {
    this.educationItems = this.educationService.getEducationItems();
    this.experienceItems = this.experienceService.getExperienceItems();
  }

}
