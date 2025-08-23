import { Component } from '@angular/core';

import { FadeInDirective } from '../../../../core/directives/fade-in.directive';

import { SkillBarComponent } from '../../../../shared/components/skill-bar/skill-bar.component';

@Component({
  selector: 'app-cv-summary',
  imports: [SkillBarComponent, FadeInDirective],
  templateUrl: './cv-summary.component.html',
  styleUrl: './cv-summary.component.css'
})
export class CvSummaryComponent {

}
