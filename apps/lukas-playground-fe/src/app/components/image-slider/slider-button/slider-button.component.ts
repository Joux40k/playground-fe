import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule],
  selector: 'slider-button',
  templateUrl: './slider-button.component.html',
  styleUrl: './slider-button.component.scss',
})
export class SliderButtonComponent {}
