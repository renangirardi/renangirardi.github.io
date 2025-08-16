import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  imports: [],
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.css'
})
export class SkillBarComponent implements AfterViewInit {
  @ViewChild('progressValue') progressValue!: ElementRef;
  @Input() progressWidth!: string;
  @Input() label!: string;
  @Input() color!: number;

  colors: Record<number, string> = {
    0: '#007ACC',
    1: '#F7DF1E',
    2: '#E44D26',
  };

  ngAfterViewInit() {
    this.progressValue.nativeElement.style.background = this.colors[this.color];
    this.progressValue.nativeElement.style.setProperty('--final-width', this.progressWidth);
  }

}
