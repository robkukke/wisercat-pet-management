package com.robkukke.wisercatpetmanagement.controller;

import com.robkukke.wisercatpetmanagement.entity.FurColor;
import com.robkukke.wisercatpetmanagement.repository.FurColorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/data")
public class FurColorController {

    @Autowired
    private FurColorRepository furColorRepository;

    // Handle fur colors fetch from database
    @GetMapping("/furcolors")
    public ResponseEntity<List<FurColor>> getFurColors() {
        List<FurColor> furColors = furColorRepository.findAll();
        return ResponseEntity.ok().body(furColors);
    }
}
