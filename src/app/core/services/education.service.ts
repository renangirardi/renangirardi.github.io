import { Injectable } from '@angular/core';
import { Education } from '../models/education';
import { Certificate } from '../models/certificate';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  educationUrl =
    'https://gist.githubusercontent.com/renangirardi/00cbf87a7d3fb94582f8a577559d93a6/raw/c8663de31977d2115570548fe1a75e5d2294aac0/education.json';

  certificatesUrl =
    'https://gist.githubusercontent.com/renangirardi/89f32308a6994500ea23a80bc61d37b7/raw/ae19374f563b7f8a2951b58a68f669acdd6dc5ae/certificates.json';

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
