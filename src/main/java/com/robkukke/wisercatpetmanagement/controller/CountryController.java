package com.robkukke.wisercatpetmanagement.controller;

import com.robkukke.wisercatpetmanagement.repository.CountryRepository;
import com.robkukke.wisercatpetmanagement.entity.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CountryController {

    @Autowired
    private CountryRepository countryRepository;

    @GetMapping("/countries")
    public ResponseEntity<List<Country>> getCountries() {
        List<Country> countries = countryRepository.findAll();
        return new ResponseEntity<>(countries, HttpStatus.OK);
    }
}
