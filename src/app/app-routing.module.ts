import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ListSuggestionsComponent } from './features/suggestions/list-suggestions/list-suggestions.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:'full'},
  {path:"home",component:HomeComponent},
  { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
   {path:"**", component:NotFoundComponent} //toujours la dernière route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
