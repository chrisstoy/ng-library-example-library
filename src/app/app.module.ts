import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesModule } from '../library/services/services.module';
import { ComponentsModule } from '../library/components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ServicesModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
