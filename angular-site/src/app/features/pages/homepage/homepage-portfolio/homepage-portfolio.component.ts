import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FadeInDirective } from '../../../../core/directives/fade-in.directive';

import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-homepage-portfolio',
  imports: [RouterModule, ButtonComponent, FadeInDirective],
  templateUrl: './homepage-portfolio.component.html',
  styleUrl: './homepage-portfolio.component.css'
})
export class HomepagePortfolioComponent {

}
