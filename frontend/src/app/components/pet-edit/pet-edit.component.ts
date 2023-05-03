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

  onSubmit() {
    this.petService
      .editPet(this.id, this.pet)
      .subscribe((result) => this.gotoPetsTable());
  }

  gotoPetsTable() {
    this.router.navigate(['/pets']);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    const currentUser = localStorage.getItem('currentUser') ?? '';

    this.petService.getPet(this.id).subscribe((data) => {
      this.pet = data;
      if (this.pet.username !== currentUser) {
        this.router.navigate(['/pets']);
      }
    });

    this.typeService.getTypes().subscribe((data) => {
      this.petTypes = data;
    });

    this.furColorService.getFurColors().subscribe((data) => {
      this.petFurColors = data;
    });

    this.countryService.getCountries().subscribe((data) => {
      this.petCountries = data;
    });
  }
}
