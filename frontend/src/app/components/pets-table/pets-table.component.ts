import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.scss'],
})
export class PetsTableComponent implements OnInit {
  pets!: Pet[];
  headers = ['#', 'Name', 'Code', 'Type', 'Fur color', 'Country'];

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.petService.getPets().subscribe((data) => {
      this.pets = data;
    });
  }
}
