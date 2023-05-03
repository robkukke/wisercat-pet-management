package com.robkukke.wisercatpetmanagement.controller;

import com.robkukke.wisercatpetmanagement.entity.Pet;
import com.robkukke.wisercatpetmanagement.repository.PetRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PetController {

    @Autowired
    private PetRepository petRepository;

    @GetMapping("/pets")
    public ResponseEntity<List<Pet>> getPets(@RequestParam(value = "username", required = true) String username) {
        List<Pet> pets = petRepository.findByUsername(username);
        return ResponseEntity.ok().body(pets);
    }

    @GetMapping("/pets/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable(value = "id") Long petId) {
        Pet pet = petRepository.findById(petId).orElse(null);
        return ResponseEntity.ok().body(pet);
    }

    @PostMapping("/pets")
    void addPet(@Valid @RequestBody Pet pet) {
        petRepository.save(pet);
    }

    @PutMapping("/pets/{id}")
    public ResponseEntity<Pet> updatePet(@PathVariable(value = "id") Long petId, @RequestBody Pet petDetails) {
        Pet pet = petRepository.findById(petId).orElse(null);
        pet.setName(petDetails.getName());
        pet.setCode(petDetails.getCode());
        pet.setType(petDetails.getType());
        pet.setFurColor(petDetails.getFurColor());
        pet.setCountry(petDetails.getCountry());
        final Pet updatedPet = petRepository.save(pet);
        return ResponseEntity.ok().body(updatedPet);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
