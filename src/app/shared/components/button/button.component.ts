import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() style: string = 'primary';
  @Input() size: string = 'medium';
  @Input() text: string = 'Button';
  @Input() routerLink: string[] = ['/'];
}
