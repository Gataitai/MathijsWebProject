package io.gate.mathijswebproject.controllers;

import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.services.PersonService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController()
@RequestMapping("/people")
public class PersonController {
    private PersonService personService;

    private PersonController(PersonService personService){
        this.personService = personService;
    }

//    @GetMapping()
//    public List<Person> personIndex(){
//        return personService.getPersons();
//    }
//
//    @PutMapping()
//    public ResponseEntity<Person> update(@RequestBody Person newPerson){
//        personService.update(newPerson);
//        return ResponseEntity.ok(personService.getPersons);
//    }
}
