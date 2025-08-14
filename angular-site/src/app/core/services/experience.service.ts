import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceItems: Experience[] = [
    {
      icon: 'code',
      job: 'Software Engineer',
      company: 'Dell Technologies'
    },
    {
      icon: 'dentistry',
      job: 'Co-founder - Manager',
      company: 'Da Vinci Odontologia'
    },
    {
      icon: 'local_cafe',
      job: 'Founder - Consultant',
      company: 'CUP Business Consulting'
    },
    {
      icon: 'bar_chart',
      job: 'Marketing Analyst',
      company: 'Decision IT'
    }
  ];

  getExperienceItems(): Experience[] {
    return this.experienceItems;
  }
}
