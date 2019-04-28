import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


  const routes: Routes = [
    {
      path: '',
      component:LoginPage
    }
]
@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)

  ]
})
export class LoginContainerModule { }
