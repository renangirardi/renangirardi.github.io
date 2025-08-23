import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  imports: [],
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.css',
})
export class SkillBarComponent implements AfterViewInit {
  @ViewChild('progressValue') progressValue!: ElementRef;
  @Input() progressWidth!: string;
  @Input() label!: string;
  @Input() color!: number;

  colors: Record<number, string> = {
    0: '#071330',
    1: '#0C4160',
    2: '#4A90E2',
  };

  ngAfterViewInit() {
    this.progressValue.nativeElement.style.background = this.colors[this.color];
    this.progressValue.nativeElement.style.setProperty(
      '--final-width',
      this.progressWidth,
    );
  }
}
