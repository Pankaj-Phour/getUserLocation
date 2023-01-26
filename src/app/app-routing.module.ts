import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path:'', component:IntroComponent },
  {path:'location', component:LocationComponent}
];

@NgModule({
  // Added HashRouting to load pages smoothly on server on january 23 2023 
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
