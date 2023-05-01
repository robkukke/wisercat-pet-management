import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsTableComponent } from './components/pets-table/pets-table.component';
import { PetAddComponent } from './components/pet-add/pet-add.component';
import { PetService } from './services/pet.service';

@NgModule({
  declarations: [AppComponent, PetsTableComponent, PetAddComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
