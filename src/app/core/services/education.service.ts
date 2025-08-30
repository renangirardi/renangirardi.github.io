import { Injectable } from '@angular/core';

import { Education } from '../models/education';
import { Certificate } from '../models/certificate';
import { Gists } from '../utils/gists/gists';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  educationUrl = Gists.EDUCATION_URL;

  certificatesUrl = Gists.CERTIFICATES_URL;

  async getEducationItems(): Promise<Education[]> {
    try {
      const response = await fetch(this.educationUrl);
      return response.json();
    } catch (error) {
      console.error('Error fetching education items:', error);
      return [];
    }
  }

  async getCertificates(): Promise<Certificate[]> {
    try {
      const response = await fetch(this.certificatesUrl);
      return response.json();
    } catch (error) {
      console.error('Error fetching certificates:', error);
      return [];
    }
  }
}
