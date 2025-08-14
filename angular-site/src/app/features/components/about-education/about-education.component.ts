import { Component } from '@angular/core';
import { EducationService } from '../../../core/services/education.service';
import { Education } from '../../../core/models/education';
import { AboutEducationItemComponent } from '../about-education-item/about-education-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-education',
  imports: [AboutEducationItemComponent, CommonModule],
  templateUrl: './about-education.component.html',
  styleUrl: './about-education.component.css'
})
export class AboutEducationComponent {
  educationItems!: Education[];

  constructor(private educationService: EducationService) {
    this.educationItems = this.educationService.getEducationItems();
  }
}
