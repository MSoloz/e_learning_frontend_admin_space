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
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AddChapterComponent } from './components/add-chapter/add-chapter.component';
import { EditChapterComponent } from './components/edit-chapter/edit-chapter.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


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
    EditModuleComponent,
    AddChapterComponent,
    EditChapterComponent,
    ChapterListComponent,


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
    RouterModule ,
    MatPaginatorModule,
    NgxPaginationModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
