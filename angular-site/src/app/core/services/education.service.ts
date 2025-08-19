import { Injectable } from '@angular/core';
import { Education } from '../models/education';
import { Certificate } from '../models/certificate';

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
      university: 'Universidade do Rio do Vale dos Sinos (unisinos)',
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

  private certificates: Certificate[] = [
    {
      name: 'Angular: explorando testes de unidade e integração',
      year: 2025,
      institution: 'alura',
      url: 'https://cursos.alura.com.br/formalCertificate/32278104-252c-4240-b43f-22dc13de19f4'
    },
    {
      name: 'Angular: evoluindo com formulários e roteamento',
      year: 2025,
      institution: 'alura',
      url: 'https://cursos.alura.com.br/formalCertificate/da4d66d6-5705-484f-89f3-56a0a6025414'
    },
    {
      name: 'Angular: ciclo de vida',
      year: 2025,
      institution: 'alura',
      url: 'https://cursos.alura.com.br/formalCertificate/1837de47-b932-4a5e-9fd4-dd4585128655'
    },
    {
      name: 'Node.js: testes unitários e de integração',
      year: 2025,
      institution: 'alura',
      url: 'https://cursos.alura.com.br/formalCertificate/556373ee-2685-4558-b403-a9154fd65795'
    },
    {
      name: 'Angular & NodeJS - The MEAN Stack Guide',
      year: 2023,
      institution: 'udemy',
      url: 'https://udemy.com/certificate/UC-fa41100c-3c1f-4731-9245-be90bad561a1/'
    },
    {
      name: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
      year: 2023,
      institution: 'udemy',
      url: 'https://udemy.com/certificate/UC-d67dcf2b-7071-4b5d-88a7-1d4532b98005/'
    },
    {
      name: 'The Complete ChatGPT Web Development Code Along - Javascript',
      year: 2023,
      institution: 'udemy',
      url: 'https://udemy.com/certificate/UC-97268c34-50fb-4f56-996a-7f9983f1d8cd/'
    },
    {
      name: 'Leadership: Practical Leadership Skills',
      year: 2022,
      institution: 'udemy',
      url: 'https://udemy.com/certificate/UC-b0417b87-bc63-4e6a-a1c9-6f9e50f1e4bd/'
    },
    {
      name: 'Feedback - A arte de dar e receber feedbacks mais efetivos',
      year: 2022,
      institution: 'udemy',
      url: 'https://udemy.com/certificate/UC-e6aa54c9-a588-4b70-ae71-06e4faeec063/'
    },
    {
      name: 'Curso de Extensão - Java',
      year: 2022,
      institution: 'unisinos',
      url: 'https://www.unisinos.br/certificados/735478BEDF00AEBA585D03E7C870C64964C54983'
    },
    {
      name: 'Git Complete: The definitive, step-by-step guide to Git',
      year: 2022,
      institution: 'udemy',
      url: 'http://ude.my/certificate/UC-d1b5fb0d-2b5e-4b33-a01e-caa44a235d91'
    },
    {
      name: 'JavaScript Basics for Beginners',
      year: 2021,
      institution: 'udemy',
      url: 'https://www.udemy.com/certificate/UC-5dd6c58e-325b-438b-aec9-6cc7de1e072a'
    },
    {
      name: 'Scrum for beginners + Scrum Master Certification Preparation',
      year: 2021,
      institution: 'udemy',
      url: 'https://www.udemy.com/certificate/UC-232a2955-036b-426b-8d85-5b25811fe687/'
    },
    {
      name: 'C# Basics for Beginners: Learn C# Fundamentals by Coding',
      year: 2021,
      institution: 'udemy',
      url: 'https://www.udemy.com/certificate/UC-b0baffbc-f073-4d61-a07b-d5f30dd1a09f/'
    },
    {
      name: 'Dell Product Design Program',
      year: 2021,
      institution: 'unisinos',
      url: 'https://www.unisinos.br/certificados/E2F7E781B73C31DEF51E53DC4B1071F78A2064A5'
    },
    {
      name: 'O Guia Definitivo para Desenvolvimento de Jogos com Unity',
      year: 2020,
      institution: 'udemy',
      url: 'https://www.udemy.com/certificate/UC-eb87e28a-3fa4-49fb-9007-aa9b1e24aa74/'
    },
  ];

  getEducationItems(): Education[] {
    return this.educationItems;
  }

  getCertificates(): Certificate[] {
    return this.certificates;
  }
}
