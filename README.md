# Wisercat's Pet Management exercise

## TODO:
* Create a Spring Boot application. :white_check_mark:
  * :alarm_clock: 3-4h
  * Comments and thoughts:
    * Converted the provided HTML example into a Spring Boot and Angular application.
    * Due to helpful resources, some of the later tasks were done during this task as well.
  * Resources:
    * https://medium.com/javarevisited/getting-started-with-spring-boot-and-liquibase-f559d4e38498
    * https://www.baeldung.com/spring-boot-angular-web
* User is displayed a list of pets that the user has entered. :white_check_mark:
  * :alarm_clock: Done during the first task.
  * Comments and thoughts:
    * Done during the first task.
  * Resources:
    * Same as the first task.
* User can add pets. :white_check_mark:
  * :alarm_clock: Done during the first task.
  * Comments and thoughts:
    * Done during the first task.
  * Resources:
    * Same as the first task.
* A pet has a name, an identification code, a type (Cat, Dog, etc.) and a fur color. :white_check_mark:
  * :alarm_clock: Done during the first task.
  * Comments and thoughts:
    * Done during the first task.
  * Resources:
    * Same as the first task.
* When a new pet is saved, validate all mandatory fields. :white_check_mark:
  * :alarm_clock: 1h
  * Comments and thoughts:
    * Added client-side validations to the form.
    * All fields have the `required` property, also added the `minlength` property where applicable.
    * Used the `ngIf` directive to display error messages.
  * Resources:
    * https://angular.io/guide/form-validation
* Store all input data to database. :white_check_mark:
  * :alarm_clock: Done during the first task.
  * Comments and thoughts:
    * Done during the first task.
    * To persist data, H2 is configured to store the database in a file, instead of in-memory.
  * Resources:
    * Same as the first task.
    * https://stackoverflow.com/a/71980879
* Values of select lists have to be populated with data from database. :white_check_mark:
  * :alarm_clock: 1-2h
  * Comments and thoughts:
    * Similar to how pets were displayed in the first task, this time it's as values of select lists.
    * Liquibase populates the database with necessary values.
  * Resources:
    * https://stackoverflow.com/a/43176744

## Optional TODO:
* User can edit pets. :white_check_mark:
  * :alarm_clock: 1-2h
  * Comments and thoughts:
    * Similar to adding pets, but the fields are already pre-filled with data from the database and saving updates the data in the database.
  * Resources:
    * None.
* Log in with one of the created user accounts (registration does not have to be implemented). :white_check_mark:
  * :alarm_clock: 4-5h
  * Comments and thoughts:
    * Implemented a basic log in system that uses Local Storage. As it does not use JWT, it is not secure (for the scope of the exercise, I think this is fine, as necessary functionality is achieved and no strict rules as to the authentication method were given.)
  * Resources:
    * https://martinelli.ch/angular-15-spring-boot-3-and-jwt/
    * https://docs.spring.io/spring-security/reference/servlet/configuration/java.html
* Create 3 user accounts into the database (username and password). :white_check_mark:
  * :alarm_clock: 10 min
  * Comments and thoughts:
    * Liquibase populates the database with necessary values.
    * Account 1: `userone:userone`.
    * Account 2: `usertwo:usertwo`.
    * Account 3: `userthree:userthree`.
  * Resources:
    * None.
* User is not allowed to see other user's pets. :white_check_mark:
  * :alarm_clock: 30 min
  * Comments and thoughts:
    * Added an username column to the pets table, the value will be the pet's creator's username.
    * Added the currently logged in user's username as an argument to the pets fetching method, so only their pets are shown in the list.
    * If an user tries to access someone else's pet via URL, they will be redirected to the pets list.
  * Resources:
    * None.
* User can sort pets by all columns in the table. :white_check_mark:
  * :alarm_clock: 1-2h
  * Comments and thoughts:
    * Each column can be clicked and the table will be sorted alphabetically, clicking again will sort the table alphabetically in reverse.
    * Finding the correct algorithm and getting it to work took some time.
  * Resources:
    * https://stackoverflow.com/a/63639729
* A pet has a country of origin. :white_check_mark:
  * :alarm_clock: Done during the first task.
  * Comments and thought:
    * Done during the first task.
  * Resources:
    * Same as the first task.
* Validate form fields both inline and in the back-end. :white_check_mark:
  * :alarm_clock: 30 min
  * Comments and thoughts:
    * Inline validation was done in the first part.
  * Resources:
    * https://www.baeldung.com/spring-boot-bean-validation

## Technical requirements:
* Application has to run with 1 click or command. If front- and back-end are in different projects, then 1 click/command per project.
  * Spring Boot project: run `mvnw spring-boot:run` in the root directory.
  * Angular project: run `cd frontend & ng serve --open` in the root directory.
* Use Spring Boot.
  * Version: `3.0.6`.
* Embed a H2 database into the application.
  * Version: `latest from maven repository`.
* Use Liquibase as a database migration tool, execute SQL scripts on app startup.
  * Version: `latest from maven repository`.
* Use Angular for front-end.
  * Version: `15.2.0`.
* Use Bootstrap for design and styling. Do not use multiple CSS libraries.
  * Version: `5.3.0-alpha3`.
* Use latest versions of all used technologies.
  * Java version: `20.0.1`.
  * Node version: `18.16.0`.
  * npm version: `9.6.5`.
* API has to be RESTful.