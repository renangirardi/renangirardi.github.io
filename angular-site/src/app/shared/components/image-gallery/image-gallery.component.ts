import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { ImageGalleryService } from '../../../core/services/image-gallery.service';
import { ImageGalleryItem } from '../../../core/models/image-gallery-item';

@Component({
  selector: 'app-image-gallery',
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {
  @ViewChild('myImg') myImg!: ElementRef;
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('img01') img01!: ElementRef;
  @ViewChild('close') close!: ElementRef;
  @Input() galleryImages!: string;

  imageGalleryItems: ImageGalleryItem[] = [];

  @HostListener('document:keydown.escape', ['$event'])
  onEscKey(event: KeyboardEvent) {
    this.closeModal();
  }

  constructor(private imageGalleryService: ImageGalleryService) { }

  ngOnInit() {
    this.loadGalleryImages();
  }

  loadGalleryImages() {
    if (this.galleryImages === 'about-me-1') {
      this.imageGalleryItems = this.imageGalleryService.getAboutMeImages1();
    } else if (this.galleryImages === 'about-me-2') {
      this.imageGalleryItems = this.imageGalleryService.getAboutMeImages2();
    }
  }

  openModal(myImg: HTMLImageElement) {
    this.modal.nativeElement.style.display = "block";
    this.img01.nativeElement.src = myImg.src;
  }

  closeModal() {
    this.modal.nativeElement.style.display = "none";
  }

  onBackgroundClick(event: MouseEvent) {
    if (event.target === this.modal.nativeElement) {
      this.closeModal();
    }
  }

}
