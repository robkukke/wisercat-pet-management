package com.robkukke.wisercatpetmanagement.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "pet")
public class Pet {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    @NotNull(message = "Name is required.")
    @NotBlank(message = "Name is required.")
    @Size(min = 4, message = "Name must be at least 4 characters long.")
    private String name;

    @Column(name = "code")
    @NotNull(message = "Code is required.")
    @NotBlank(message = "Code is required.")
    @Size(min = 4, message = "Code must be at least 4 characters long.")
    private String code;

    @Column(name = "type")
    @NotNull(message = "Type is required.")
    @NotBlank(message = "Type is required.")
    private String type;

    @Column(name = "fur_color")
    @NotNull(message = "Fur color is required.")
    @NotBlank(message = "Fur color is required.")
    private String furColor;

    @Column(name = "country")
    @NotNull(message = "Country of origin is required.")
    @NotBlank(message = "Country of origin is required.")
    private String country;

    @Column(name = "username")
    @NotNull(message = "Username is required.")
    @NotBlank(message = "Username is required.")
    private String username;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getFurColor() {
        return furColor;
    }

    public void setFurColor(String furColor) {
        this.furColor = furColor;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
