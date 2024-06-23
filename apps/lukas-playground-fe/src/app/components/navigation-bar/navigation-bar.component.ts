import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {}
