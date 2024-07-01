import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider.component';
import { SliderButtonComponent } from './slider-button/slider-button.component';



@NgModule({
  declarations: [ImageSliderComponent, 
    SliderButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SliderButtonComponent,
    ImageSliderComponent
  ]
})
export class ImageSliderModule { }
