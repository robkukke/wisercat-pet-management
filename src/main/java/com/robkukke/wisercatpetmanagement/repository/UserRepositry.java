package com.robkukke.wisercatpetmanagement.repository;

import com.robkukke.wisercatpetmanagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositry extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
