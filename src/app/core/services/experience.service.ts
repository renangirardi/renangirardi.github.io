import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root',
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
        'Designed and developed internal tools for test monitoring and management using Angular, Node.js, Express.js, and MongoDB (MEAN Stack), integrating REST APIs, version control with Git, Agile/Scrum methodologies, and CI/CD practices. This project increased team productivity and operational visibility.',
        'Developed and implemented A/B tests on Dell’s global e-commerce platforms using Vanilla JavaScript and Adobe Target.',
        'Acted as Focal Point for A/B testing projects, coordinating development, QA, and performance analysis.',
        'Conducted UX research, interface design, and usability testing to enhance the user experience of internal platforms.',
      ],
      skills: [
        'JavaScript',
        'Adobe Target',
        'Angular',
        'UX design',
        'TypeScript',
      ],
      logo: 'dell_logo.png',
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
        'Received intensive training in UI, UX, agile, prototyping, and human-centered design.',
        'Applied modern frontend practices to improve usability, accessibility, and performance across multiple projects.',
        'Supported knowledge-sharing initiatives, helping strengthen design consistency and team productivity.',
      ],
      skills: ['WordPress', 'UI design', 'UX design', 'Figma', 'Prototyping'],
      logo: 'dell_logo.png',
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
        'Developed and maintained the clinics corporate website using WordPress, contributing to digital visibility and client acquisition.',
        'Implemented SEO best practices and content strategies to improve search rankings.',
        'Analyzed campaign performance through metrics and reports, driving data-informed decisions that strengthened brand positioning and customer reach.',
      ],
      skills: [
        'WordPress',
        'Digital Marketing',
        'CRM',
        'People Management',
        'Business Strategy',
      ],
      logo: 'davinciodontologia_logo.png',
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
        'Conducted workshops and training sessions on digital marketing strategies, tools, and best practices, empowering clients to strengthen their online presence.',
        'Supported entrepreneurs in adopting digital platforms, enhancing decision-making through data insights, and creating sustainable strategies for long-term success.',
      ],
      skills: [
        'Wordpress',
        'Marketing',
        'Operations',
        'Project Management',
        'Problem Solving',
      ],
      logo: 'cupconsultoria_logo.png',
    },
  ];

  getExperienceItems(): Experience[] {
    return [...this.experienceItems];
  }
}
