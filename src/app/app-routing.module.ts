import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', component: LoginComponent, children:[
    { path: '', component: LibraryComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'users', component: UsersComponent },
  ]},
 
  { path: '**',  redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
