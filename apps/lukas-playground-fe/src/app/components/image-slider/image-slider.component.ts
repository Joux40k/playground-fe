import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderButtonComponent } from './slider-button/slider-button.component';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, BrowserAnimationsModule, SliderButtonComponent],
  providers: [BrowserAnimationsModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
  animations: [
  ]
})
export class ImageSliderComponent {
  images: string[] = [
    "assets/test1.jpeg",
    "assets/test2.jpg",
    "assets/test3.jpg"
  ];
  imageIndex: number = 0;


  rotateRight() {
    if(this.imageIndex === 0) {
      this.imageIndex = this.images.length - 1;
    } else {
      this.imageIndex -= 1;
    }
  }
  rotateLeft() {
    if(this.imageIndex >= this.images.length - 1) {
      this.imageIndex = 0;
    } else {
      this.imageIndex += 1;
    }
  }

  getCurrentImage() {
    return this.images[this.imageIndex];
  }

  getRightImage(): string {
    if(this.imageIndex >= this.images.length - 1) {
      return this.images[0];
    } else {
      return this.images[this.imageIndex + 1];
    }
  }

  getLeftImage(): string {
    if(this.imageIndex === 0) {
      return this.images[this.images.length-1];
    } else {
      return this.images[this.imageIndex - 1];
    }
  }
}
