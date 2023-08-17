import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { LevelListComponent } from './components/level-list/level-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddLevelComponent } from './components/add-level/add-level.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { EditLevelComponent } from './components/edit-level/edit-level.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { AddModuleComponent } from './components/add-module/add-module.component';
import { EditModuleComponent } from './components/edit-module/edit-module.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LevelListComponent,
    NavbarComponent,
    AddLevelComponent,
    QuestionListComponent,
    EditLevelComponent,
    ModuleListComponent,
    AddModuleComponent,
    EditModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
