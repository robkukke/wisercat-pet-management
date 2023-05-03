import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsTableComponent } from './components/pets-table/pets-table.component';
import { PetEditComponent } from './components/pet-edit/pet-edit.component';
import { PetAddComponent } from './components/pet-add/pet-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'pets',
    component: PetsTableComponent,
    canActivate: [AuthGuard],
    title: 'Pets list'
  },
  {
    path: 'pets/:id',
    component: PetEditComponent,
    canActivate: [AuthGuard],
    title: 'Edit pet'
  },
  {
    path: 'add',
    component: PetAddComponent,
    canActivate: [AuthGuard],
    title: 'Add a new pet'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
    title: 'Log in'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
