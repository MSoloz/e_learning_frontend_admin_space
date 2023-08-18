import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LevelListComponent } from './components/level-list/level-list.component';
import { AddLevelComponent } from './components/add-level/add-level.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { EditLevelComponent } from './components/edit-level/edit-level.component';

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
    
  
  ]





  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
