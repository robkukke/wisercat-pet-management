package com.robkukke.wisercatpetmanagement.controller;

import com.robkukke.wisercatpetmanagement.repository.FurColorRepository;
import com.robkukke.wisercatpetmanagement.entity.FurColor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FurColorController {

    @Autowired
    private FurColorRepository furColorRepository;

    @GetMapping("/furcolors")
    public ResponseEntity<List<FurColor>> getFurColors() {
        List<FurColor> furColors = furColorRepository.findAll();
        return new ResponseEntity<>(furColors, HttpStatus.OK);
    }
}
