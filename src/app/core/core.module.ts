import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    HttpInterceptorProviders,
  ]
})
export class CoreModule { }
