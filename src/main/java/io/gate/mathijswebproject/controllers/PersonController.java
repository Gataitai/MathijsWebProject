package io.gate.mathijswebproject.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import io.gate.mathijswebproject.entities.Comment;
import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.entities.PixelArtPost;
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
    private final PersonService personService;

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

    @GetMapping("/name")
    @JsonView(Views.Public.class)
    public List<Person> getByName(@RequestParam String name){
        return personService.getPeopleByName(name);
    }

    @PostMapping()
    @JsonView(Views.Public.class)
    public Person postPerson(@RequestBody Person newPerson){
        return personService.savePerson(newPerson);
    }

    @PutMapping("/{id}")
    @JsonView(Views.Public.class)
    public Person update(@PathVariable Long id, @RequestBody Person updatedPerson){
        return personService.updatePerson(id, updatedPerson);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Delete(@PathVariable Long id){
        personService.deletePerson(id);
    }
}
