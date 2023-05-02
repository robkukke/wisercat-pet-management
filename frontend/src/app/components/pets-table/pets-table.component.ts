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
  petsToShow!: Pet[];
  headers = ['ID', 'Name', 'Code', 'Type', 'Fur color', 'Country'];
  sortOrder = { column: '', ascending: true };

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.petService.getPets().subscribe((data) => {
      this.pets = data;
      this.petsToShow = [...this.pets];
    });
  }

  sort(column: string) {
    const key = column
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()) as keyof Pet;

    if (this.sortOrder.column === column) {
      this.sortOrder.ascending = !this.sortOrder.ascending;
    } else {
      this.sortOrder.column = column;
      this.sortOrder.ascending = true;
    }

    this.petsToShow.sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];
      let comparison = 0;

      if (aValue > bValue) {
        comparison = 1;
      } else if (aValue < bValue) {
        comparison = -1;
      }

      return this.sortOrder.ascending ? comparison : -comparison;
    });
  }
}
