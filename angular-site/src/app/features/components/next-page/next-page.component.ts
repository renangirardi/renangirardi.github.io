import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-next-page',
  imports: [ButtonComponent, RouterModule],
  templateUrl: './next-page.component.html',
  styleUrl: './next-page.component.css'
})
export class NextPageComponent {
  @Input() nextPage!: string;
  @Input() text!: string;
  @Input() btnText!: string;

}
