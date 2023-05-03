package com.robkukke.wisercatpetmanagement.repository;

import com.robkukke.wisercatpetmanagement.entity.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    List<Pet> findByUsername(String username);
}
