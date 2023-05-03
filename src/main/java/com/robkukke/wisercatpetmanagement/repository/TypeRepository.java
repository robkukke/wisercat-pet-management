package com.robkukke.wisercatpetmanagement.repository;

import com.robkukke.wisercatpetmanagement.entity.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRepository extends JpaRepository<Type, Long> {

}
