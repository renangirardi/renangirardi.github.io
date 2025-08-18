import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-homepage-about',
  imports: [RouterModule, ButtonComponent],
  templateUrl: './homepage-about.component.html',
  styleUrl: './homepage-about.component.css'
})
export class HomepageAboutComponent {

}
