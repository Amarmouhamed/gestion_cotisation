import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"login"},
  {path:'login',component:LoginComponent},
  {
    path:"accueil",
    loadChildren: ()=> import("./home/home.module").then((m)=>m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
