package com.robkukke.wisercatpetmanagement.controller;

import com.robkukke.wisercatpetmanagement.entity.Type;
import com.robkukke.wisercatpetmanagement.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/data")
public class TypeController {

    @Autowired
    private TypeRepository typeRepository;

    // Handle types fetch from database
    @GetMapping("/types")
    public ResponseEntity<List<Type>> getTypes() {
        List<Type> types = typeRepository.findAll();
        return ResponseEntity.ok().body(types);
    }
}
