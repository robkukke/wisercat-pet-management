import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet.service';
import { AuthService } from '../../services/auth.service';

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
  username = '';

  constructor(
    private router: Router,
    private petService: PetService,
    private authService: AuthService
  ) {
    this.username = localStorage.getItem('currentUser') ?? '';
  }

  ngOnInit() {
    // Get pets from database and display in table
    this.petService.getPets().subscribe((data) => {
      this.pets = data;
      this.petsToShow = [...this.pets];
    });
  }

  // Handle column sorting
  sort(column: string) {
    // Convert column header to camelCase key
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

  // Handle log out
  onLogout() {
    this.authService.logout().subscribe(() => {
      // Remove user's username from Local Storage and navigate to log in form
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    });
  }
}
