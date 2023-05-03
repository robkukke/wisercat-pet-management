package com.robkukke.wisercatpetmanagement.controller;

import com.robkukke.wisercatpetmanagement.entity.Country;
import com.robkukke.wisercatpetmanagement.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/data")
public class CountryController {

    @Autowired
    private CountryRepository countryRepository;

    // Handle countries of origin fetch from database
    @GetMapping("/countries")
    public ResponseEntity<List<Country>> getCountries() {
        List<Country> countries = countryRepository.findAll();
        return ResponseEntity.ok().body(countries);
    }
}
