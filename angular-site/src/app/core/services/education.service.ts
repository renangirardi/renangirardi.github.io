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
      description: '',
      skills: [''],
      logo: ''
    },
    {
      icon: 'code_blocks',
      course: 'Associate in Systems Analysis and Development',
      university: 'Universidade do Rio do Vale dos Sinos (Unisinos)',
      year: '2020 - 2023',
      description: '',
      skills: [''],
      logo: ''
    },
    {
      icon: 'work',
      course: 'Bachelor of Science in Business Administration',
      university: 'Universidade Federal do Rio Grande do Sul (UFRGS)',
      year: '2008 - 2012',
      description: '',
      skills: [''],
      logo: ''
    },
    {
      icon: 'School',
      course: '+15 Certificates in different areas',
      university: 'Udemy, Alura, Unisinos, Franklin Covey, etc.',
      year: '2020 - ongoing',
      description: '',
      skills: [''],
      logo: ''
    }
  ];

  getEducationItems(): Education[] {
    return this.educationItems;
  }
}
