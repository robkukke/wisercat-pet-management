package com.robkukke.wisercatpetmanagement.repository;

import com.robkukke.wisercatpetmanagement.entity.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet, Integer> {

}
