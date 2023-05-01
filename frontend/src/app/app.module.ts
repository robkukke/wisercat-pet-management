import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsTableComponent } from './components/pets-table/pets-table.component';
import { PetEditComponent } from './components/pet-edit/pet-edit.component';
import { PetAddComponent } from './components/pet-add/pet-add.component';
import { PetService } from './services/pet.service';
import { TypeService } from './services/type.service';
import { FurColorService } from './services/furcolor.service';
import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    PetsTableComponent,
    PetEditComponent,
    PetAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PetService, TypeService, FurColorService, CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
