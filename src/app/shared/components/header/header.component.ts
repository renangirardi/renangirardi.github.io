import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  toggleMobileMenu() {
    this.mobileMenu.nativeElement.style.transform = 'translateY(0)';
    this.overlay.nativeElement.style.display = 'block';
  }

  closeMobileMenu() {
    this.mobileMenu.nativeElement.style.transform = 'translateY(-100%)';
    this.overlay.nativeElement.style.display = 'none';
  }

}
