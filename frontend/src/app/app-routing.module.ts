import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsTableComponent } from './components/pets-table/pets-table.component';
import { PetEditComponent } from './components/pet-edit/pet-edit.component';
import { PetAddComponent } from './components/pet-add/pet-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'pets', pathMatch: 'full' },
  { path: 'pets', component: PetsTableComponent, title: 'Pets list' },
  { path: 'pets/:id', component: PetEditComponent, title: 'Edit pet' },
  { path: 'add', component: PetAddComponent, title: 'Add a new pet' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
