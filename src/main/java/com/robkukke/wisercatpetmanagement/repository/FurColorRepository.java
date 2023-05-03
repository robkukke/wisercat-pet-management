package com.robkukke.wisercatpetmanagement.repository;

import com.robkukke.wisercatpetmanagement.entity.FurColor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FurColorRepository extends JpaRepository<FurColor, Long> {

}
