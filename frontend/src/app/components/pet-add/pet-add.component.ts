import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss'],
})
export class PetAddComponent {
  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) {
    this.pet = new Pet();
  }

  onSubmit() {
    this.petService
      .savePet(this.pet)
      .subscribe((result) => this.gotoPetsTable());
  }

  gotoPetsTable() {
    this.router.navigate(['/pets']);
  }
}
