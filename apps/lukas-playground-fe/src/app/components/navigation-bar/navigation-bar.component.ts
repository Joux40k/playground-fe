import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [CommonModule, LogoComponent, MatButton],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {}
