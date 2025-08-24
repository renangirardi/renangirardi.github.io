import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Education } from '../../../../core/models/education';
import { Certificate } from '../../../../core/models/certificate';
import { EducationService } from '../../../../core/services/education.service';
import { FadeInDirective } from '../../../../core/directives/fade-in.directive';

import { CvEducationItemComponent } from './cv-education-item/cv-education-item.component';
import { CvEducationCertificateComponent } from './cv-education-certificate/cv-education-certificate.component';

@Component({
  selector: 'app-cv-education',
  imports: [
    CommonModule,
    CvEducationItemComponent,
    CvEducationCertificateComponent,
    FadeInDirective,
  ],
  templateUrl: './cv-education.component.html',
  styleUrl: './cv-education.component.css',
})
export class CvEducationComponent {
  educationItems!: Education[];
  certificates!: Certificate[];
  sortedCertificates!: Certificate[];

  constructor(private educationService: EducationService) {
    this.educationService.getEducationItems().then((items) => {
      this.educationItems = items;
    });
    this.educationService.getCertificates().then((certificates) => {
      this.certificates = certificates;
      this.sortedCertificates = certificates;
    });
  }

  async sortCertificates(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    const certificates = await this.educationService.getCertificates();

    if (selectedValue === 'name') {
      this.sortedCertificates = certificates.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
    } else if (selectedValue === 'year') {
      this.sortedCertificates = certificates.sort((a, b) => b.year - a.year);
    } else {
      this.sortedCertificates = certificates.sort((a, b) =>
        a.institution.localeCompare(b.institution),
      );
    }
  }
}
