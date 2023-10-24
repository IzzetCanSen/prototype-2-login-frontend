import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, GenericFormComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
