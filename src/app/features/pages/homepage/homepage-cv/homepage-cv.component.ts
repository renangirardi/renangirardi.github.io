import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Education } from '../../../../core/models/education';
import { Experience } from '../../../../core/models/experience';
import { EducationService } from '../../../../core/services/education.service';
import { ExperienceService } from '../../../../core/services/experience.service';
import { FadeInDirective } from '../../../../core/directives/fade-in.directive';

import { HomepageCvItemComponent } from './homepage-cv-item/homepage-cv-item.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-homepage-cv',
  imports: [
    RouterModule,
    HomepageCvItemComponent,
    CommonModule,
    FadeInDirective,
    ButtonComponent,
  ],
  templateUrl: './homepage-cv.component.html',
  styleUrl: './homepage-cv.component.css',
})
export class HomepageCvComponent {
  educationItems!: Education[];
  experienceItems!: Experience[];

  constructor(
    private educationService: EducationService,
    private experienceService: ExperienceService,
  ) {
    this.educationService.getEducationItems().then((items) => {
      this.educationItems = items;
    });
    this.experienceService.getExperienceItems().then((items) => {
      this.experienceItems = items;
    });
  }
}
