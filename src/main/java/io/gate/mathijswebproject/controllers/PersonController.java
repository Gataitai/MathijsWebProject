package io.gate.mathijswebproject.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.services.PersonService;
import io.gate.mathijswebproject.views.Views;
import org.springframework.http.HttpStatus;
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

    @GetMapping()
    @JsonView(Views.Public.class)
    public List<Person> getPeople(){
        return personService.getPeople();
    }

    @GetMapping("/{id}")
    @JsonView(Views.Public.class)
    public Person getById(@PathVariable Long id){
        return personService.getPersonById(id);
    }

    @GetMapping("/{name}")
    @JsonView(Views.Public.class)
    public List<Person> getByName(@PathVariable String name){
        return personService.getPeopleByName(name);
    }

    @PostMapping()
    public Person post(@RequestBody Person newPerson){ return personService.savePerson(newPerson);}

    @PutMapping()
    public Person update(@RequestBody Person updatedPerson){
        return personService.savePerson(updatedPerson);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Delete(@PathVariable Long id){
        personService.deletePerson(id);
    }
}
