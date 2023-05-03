import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../models/pet';
import { Type } from '../../models/type';
import { FurColor } from '../../models/furcolor';
import { Country } from '../../models/country';
import { PetService } from '../../services/pet.service';
import { TypeService } from '../../services/type.service';
import { FurColorService } from '../../services/furcolor.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss'],
})
export class PetEditComponent implements OnInit {
  id!: number;
  pet: Pet;
  petTypes!: Type[];
  petFurColors!: FurColor[];
  petCountries!: Country[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService,
    private typeService: TypeService,
    private furColorService: FurColorService,
    private countryService: CountryService
  ) {
    this.pet = new Pet();
  }

  // Handle pet edit form submit
  onSubmit() {
    this.petService
      .editPet(this.id, this.pet)
      .subscribe((result) => this.gotoPetsTable());
  }

  // Navigate to pets list
  gotoPetsTable() {
    this.router.navigate(['/pets']);
  }

  ngOnInit() {
    // Get pet id from route
    this.id = this.route.snapshot.params['id'];
    // Get the logged in user's username from Local Storage
    const currentUser = localStorage.getItem('currentUser') ?? '';

    // Get pet from database with matching id
    this.petService.getPet(this.id).subscribe((data) => {
      this.pet = data;
      // Navigate to pets list if an user tries to edit a pet that is not theirs
      if (this.pet.username !== currentUser) {
        this.router.navigate(['/pets']);
      }
    });

    // Get pet types from database and set select options
    this.typeService.getTypes().subscribe((data) => {
      this.petTypes = data;
    });

    // Get pet fur colors from database and set select options
    this.furColorService.getFurColors().subscribe((data) => {
      this.petFurColors = data;
    });

    // Get pet countries of origin from database and set select options
    this.countryService.getCountries().subscribe((data) => {
      this.petCountries = data;
    });
  }
}
