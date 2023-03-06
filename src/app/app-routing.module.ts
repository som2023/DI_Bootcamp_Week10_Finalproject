import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{
   path: 'landing', component : AppComponent
},
{
  path:'login', component : LoginComponent
 },
{
  path:'', component : HomeComponent
},
{
  path:'home', component : HomeComponent
},
{
 path:'login', component : LoginComponent
},
{
  path: 'inscription', component : InscriptionComponent
}
// ,{
//   path : '',
//   redirectTo : 'accueil',
//   pathMatch : 'full'
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
