import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LogoComponent } from './components/logo/logo.component';
import { NewsComponent } from './components/news/news.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavigationBarComponent, LogoComponent, NewsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lukas-playground-fe';
}
