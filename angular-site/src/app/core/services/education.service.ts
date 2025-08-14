import { Injectable } from '@angular/core';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationItems: Education[] = [
    {
      icon: 'book_2',
      course: 'Postgraduate in Fullstack Development',
      university: 'Faculdade de Informática e Administração Paulista (FIAP)',
      year: '2025 - 2026',
      description: 'Advanced postgraduate program focused on the design, development, and deployment of complete web applications, covering both frontend and backend technologies with modern frameworks and best practices.',
      skills: [
        'TypeScript',
        'React',
        'React Native',
        'Next.js',
        'CI/CD',
        'Node.js',
        'APIs',
        'MFEs',
        'Software Architecture'
      ],
      logo: '/assets/images/fiap.png',
      url: 'https://www.fiap.com.br/'
    },
    {
      icon: 'code_blocks',
      course: 'Associate in Systems Analysis and Development',
      university: 'Universidade do Rio do Vale dos Sinos (Unisinos)',
      year: '2020 - 2023',
      description: 'Technical degree focused on analyzing business requirements, designing systems architecture, and developing software solutions using modern programming languages and tools.',
      skills: [
        'Angular',
        'Ionic',
        'SQL',
        'HTML',
        'CSS',
        'JavaScript',
        'System Analysis',
        'Database Modeling',
        'Version Control (Git)',
      ],
      logo: '/assets/images/unisinos.png',
      url: 'https://www.unisinos.br/'
    },
    {
      icon: 'work',
      course: 'Bachelor of Science in Business Administration',
      university: 'Universidade Federal do Rio Grande do Sul (UFRGS)',
      year: '2008 - 2012',
      description: 'Comprehensive undergraduate program in business administration, covering strategic management, marketing, finance, operations, and organizational behavior, with emphasis on decision-making and leadership skills.',
      skills: [
        'Strategic Planning',
        'Project Management',
        'Business Analysis',
        'Leadership',
        'Team Management',
        'Financial Analysis',
        'Marketing Strategies',
        'Negotiation',
        'Problem Solving'
      ],
      logo: '/assets/images/ufrgs.png',
      url: 'https://www.ufrgs.br/'
    }
  ];

  getEducationItems(): Education[] {
    return this.educationItems;
  }
}

/*
    {
      icon: 'School',
      course: '+15 Certificates in different areas',
      university: 'Udemy, Alura, Unisinos, Franklin Covey, etc.',
      year: '2020 - ongoing',
      description: '',
      skills: [''],
      logo: ''
    }
*/
