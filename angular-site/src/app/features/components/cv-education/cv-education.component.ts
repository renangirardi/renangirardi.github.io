import { Component } from '@angular/core';
import { EducationService } from '../../../core/services/education.service';
import { Education } from '../../../core/models/education';
import { CommonModule } from '@angular/common';
import { CvEducationItemComponent } from '../cv-education-item/cv-education-item.component';

@Component({
  selector: 'app-cv-education',
  imports: [CommonModule, CvEducationItemComponent],
  templateUrl: './cv-education.component.html',
  styleUrl: './cv-education.component.css'
})
export class CvEducationComponent {
  educationItems!: Education[];

  constructor(private educationService: EducationService) {
    this.educationItems = this.educationService.getEducationItems();
  }
}
