import { Injectable } from '@angular/core';

import { Experience } from '../models/experience';
import { Gists } from '../utils/gists/gists';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experienceUrl = Gists.EXPERIENCE_URL;

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
