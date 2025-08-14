import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-cv-item',
  imports: [],
  templateUrl: './homepage-cv-item.component.html',
  styleUrl: './homepage-cv-item.component.css'
})
export class HomepageCvItemComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() subtitle!: string;

}
