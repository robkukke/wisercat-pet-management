package com.robkukke.wisercatpetmanagement.controller;

import com.robkukke.wisercatpetmanagement.repository.TypeRepository;
import com.robkukke.wisercatpetmanagement.entity.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TypeController {

    @Autowired
    private TypeRepository typeRepository;

    @GetMapping("/types")
    public ResponseEntity<List<Type>> getTypes() {
        List<Type> types = typeRepository.findAll();
        return new ResponseEntity<>(types, HttpStatus.OK);
    }
}
