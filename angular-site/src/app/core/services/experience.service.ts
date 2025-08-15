import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceItems: Experience[] = [
    {
      icon: 'code',
      job: 'Software Engineer Mid-Level',
      company: 'Dell Technologies',
      year: '2021 - Present',
      city: 'Eldorado do Sul, Brazil',
      description: [
        'Developed and deployed A/B tests across Dell’s global e-commerce platforms using vanilla JavaScript and Adobe Target.',
        'Served as Focal Point for A/B Testing projects, coordinating development, QA, and performance analysis.',
        'Designed and developed internal tools for test tracking and management using the MEAN stack (MongoDB, Express.js, Angular, Node.js), improving team productivity and operational visibility.',
        'Applied UX research, interface design, and usability testing to enhance internal platform usability.'
      ],
      skills: ['JavaScript', 'Adobe Target', 'Angular', 'UX design', 'TypeScript'],
      logo: 'dell_logo.png'
    },
    {
      icon: 'design_services',
      job: 'Product Designer Intern',
      company: 'Dell Technologies',
      year: '2020 - 2021',
      city: 'Eldorado do Sul, Brazil',
      description: [
        'Participated in cross-functional initiatives focused on Frontend development, user experience, and internal communication tools.',
        'Contributed to email marketing, web materials, wireframes, and UI/UX documentation.',
        'Developed a portal for product designers using WordPress, supporting the dissemination of learning materials and collaborative resources.',
        'Received intensive training in UI, UX, agile, prototyping, and human-centered design.'
      ],
      skills: ['WordPress', 'UI design', 'UX design', 'Figma', 'Prototyping'],
      logo: 'dell_logo.png'
    },
    {
      icon: 'dentistry',
      job: 'Co-founder - Manager',
      company: 'Da Vinci Odontologia',
      year: '2016 - 2020',
      city: 'Porto Alegre, Brazil',
      description: [
        'Led business management, marketing strategies, client relationship, and digital platforms including website and social media.',
        'Managed digital advertising campaigns with Google Ads and optimized online presence.',
        'Developed and maintained the clinics corporate website using WordPress, contributing to digital visibility and client acquisition.'
      ],
      skills: ['WordPress', 'Digital Marketing', 'CRM', 'People Management', 'Business Strategy'],
      logo: 'davinciodontologia_logo.png'
    },
    {
      icon: 'local_cafe',
      job: 'Founder - Consultant',
      company: 'CUP Business Consulting',
      year: '2013 - 2017',
      city: 'Porto Alegre, Brazil',
      description: [
        'Provided consulting services for small businesses in the areas of marketing, operations, and technology.',
        'Developed customized solutions to improve client business processes and drive growth.',
        'Conducted workshops and training sessions on digital marketing strategies and tools.'
      ],
      skills: ['Wordpress', 'Marketing', 'Operations', 'Project Management', 'Problem Solving'],
      logo: 'cupconsultoria_logo.png'
    }
  ];

  getExperienceItems(): Experience[] {
    return this.experienceItems;
  }
}
