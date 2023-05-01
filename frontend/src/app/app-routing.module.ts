import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsTableComponent } from './components/pets-table/pets-table.component';
import { PetAddComponent } from './components/pet-add/pet-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'pets', pathMatch: 'full' },
  { path: 'pets', component: PetsTableComponent, title: 'Pets list' },
  { path: 'addpet', component: PetAddComponent, title: 'Add a new pet' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
