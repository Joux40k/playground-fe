import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { SliderButtonComponent } from './components/image-slider/slider-button/slider-button.component';


@Component({
  standalone: true,
  imports: [CommonModule, 
    RouterModule,
    LogoComponent,
    NavigationBarComponent,
    LogoComponent, 
    ImageSliderComponent,
  SliderButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lukas-playground-fe';
}
