import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LogoComponent } from './components/logo/logo.component';
import { ImageSliderModule } from './components/image-slider/image-slider.module';



@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, 
    RouterModule,
    LogoComponent,
    NavigationBarComponent,
    LogoComponent, 
    ImageSliderModule]
})
export class AppModule { }