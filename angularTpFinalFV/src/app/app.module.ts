import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { StudentsPagesComponent } from './pages/students-pages/students-pages.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsPagesComponent,
    StudentDialogComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
