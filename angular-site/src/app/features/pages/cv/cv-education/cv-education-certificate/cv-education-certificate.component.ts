import { Component, Input } from '@angular/core';
import { Certificate } from '../../../../../core/models/certificate';

@Component({
  selector: 'app-cv-education-certificate',
  imports: [],
  templateUrl: './cv-education-certificate.component.html',
  styleUrl: './cv-education-certificate.component.css'
})
export class CvEducationCertificateComponent {
  @Input() certificate!: Certificate;
}
