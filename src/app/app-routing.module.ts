import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LevelListComponent } from './components/level-list/level-list.component';
import { AddLevelComponent } from './components/add-level/add-level.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { EditLevelComponent } from './components/edit-level/edit-level.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { EditModuleComponent } from './components/edit-module/edit-module.component';
import { AddModuleComponent } from './components/add-module/add-module.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { AddChapterComponent } from './components/add-chapter/add-chapter.component';
import { EditChapterComponent } from './components/edit-chapter/edit-chapter.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { AddSubskillComponent } from './components/add-subskill/add-subskill.component';
import { EditSubskillComponent } from './components/edit-subskill/edit-subskill.component';
import { SubskillListComponent } from './components/subskill-list/subskill-list.component';

const routes: Routes = [

  { 
    path:'',component:LoginComponent
  },
  {
   
    path:'h',component:NavbarComponent,children : [
      
      {


      path :"levels",component:LevelListComponent

    },
    {

      path :"questions",component:QuestionListComponent

    },
    {

      path :"add-level",component:AddLevelComponent

    },
    {

      path :"edit-level/:id",component:EditLevelComponent

    },
    {
      path :"modules",component:ModuleListComponent

    },
    {
      path :"add-module",component:AddModuleComponent

    },
    {
      path :"edit-module/:id",component:EditModuleComponent

    },  
    {
      path :"chapters",component:ChapterListComponent

    },
    {
      path :"add-chapter",component:AddChapterComponent

    },
    {
      path :"edit-chapter/:id",component:EditChapterComponent

    },
    {
      path :"skills",component:SkillListComponent

    },
    {
      path :"add-skill",component:AddSkillComponent

    },
    {
      path :"edit-skill/:id",component:EditSkillComponent

    },
    {
      path :"subskills",component:SubskillListComponent

    },
    {
      path :"add-subskill",component:AddSubskillComponent

    },
    {
      path :"edit-subskill/:id",component:EditSubskillComponent

    },
    
  
  ]





  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
