import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Education } from '../../../../core/models/education';
import { Certificate } from '../../../../core/models/certificate';

import { EducationService } from '../../../../core/services/education.service';

import { CvEducationItemComponent } from './cv-education-item/cv-education-item.component';
import { CvEducationCertificateComponent } from './cv-education-certificate/cv-education-certificate.component';

@Component({
  selector: 'app-cv-education',
  imports: [CommonModule, CvEducationItemComponent, CvEducationCertificateComponent],
  templateUrl: './cv-education.component.html',
  styleUrl: './cv-education.component.css'
})
export class CvEducationComponent {
  educationItems!: Education[];
  certificates!: Certificate[];

  constructor(private educationService: EducationService) {
    this.educationItems = this.educationService.getEducationItems();
    this.certificates = this.educationService.getCertificates();
  }
}
