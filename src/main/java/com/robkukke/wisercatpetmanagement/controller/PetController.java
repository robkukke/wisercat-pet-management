package com.robkukke.wisercatpetmanagement.controller;

import com.robkukke.wisercatpetmanagement.repository.PetRepository;
import com.robkukke.wisercatpetmanagement.entity.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PetController {

    @Autowired
    private PetRepository petRepository;

    @GetMapping("/pets")
    public ResponseEntity<List<Pet>> getPets() {
        List<Pet> pets = petRepository.findAll();
        return new ResponseEntity<>(pets, HttpStatus.OK);
    }

    @PostMapping("/pets")
    void addPet(@RequestBody Pet pet) {
        petRepository.save(pet);
    }
}
