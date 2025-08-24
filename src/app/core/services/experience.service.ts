import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experienceUrl =
    'https://gist.githubusercontent.com/renangirardi/15a81d542ec3845eedc93af4cca4bf1e/raw/3b38c20495b0888cf6eab2957c556d5e9ee7d57f/experience.json';

  async getExperienceItems(): Promise<Experience[]> {
    try {
      const response = await fetch(this.experienceUrl);
      return response.json();
    } catch (error) {
      console.error('Error fetching experience items:', error);
      return [];
    }
  }
}
