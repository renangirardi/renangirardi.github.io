import { Component } from '@angular/core';
import { calculateAge } from '../../../../core/utils/calculate-age/calculate-age';

@Component({
  selector: 'app-about-me-content',
  imports: [],
  templateUrl: './about-me-content.component.html',
  styleUrl: './about-me-content.component.css'
})
export class AboutMeContentComponent {
  myAge!: string;
  marriageAge!: string;
  sonAge!: string;

  constructor() {
    this.myAge = calculateAge(new Date('1989-12-25'));
    this.marriageAge = calculateAge(new Date('2019-07-14'));
    this.sonAge = calculateAge(new Date('2022-10-14'));
  }

}
