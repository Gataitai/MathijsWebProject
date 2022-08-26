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

    private PersonController(PersonService personService) {
        this.personService = personService;
    }

    /**
     * gets list of all people
     * @return json array of all people.
     */
    @GetMapping()
    @JsonView(Views.Public.class)
    public List<Person> getPeople() {
        return personService.getPeople();
    }

    /**
     * Uses pathvariable of id to get person with personId
     * @param id
     * @return json of person.
     */
    @GetMapping("/{id}")
    @JsonView(Views.Public.class)
    public Person getById(@PathVariable Long id) {
        return personService.getPersonById(id);
    }

    /**
     * Uses queryparam with name to get the person
     * @param name
     * @return json array of people.
     */
    @GetMapping("/name")
    @JsonView(Views.Public.class)
    public List<Person> getByName(@RequestParam String name) {
        return personService.getPeopleByName(name);
    }

    /**
     * Uses requestbody with newPerson to post new person.
     * @param newPerson
     * @return json of new person.
     */
    @PostMapping()
    @JsonView(Views.Public.class)
    public Person postPerson(@RequestBody Person newPerson) {
        return personService.savePerson(newPerson);
    }

    /**
     * Uses pathvariable of personId to update new person with updatedPerson in requestbody.
     * @param id
     * @param updatedPerson
     * @return json of updated person.
     */
    @PutMapping("/{id}")
    @JsonView(Views.Public.class)
    public Person update(@PathVariable Long id, @RequestBody Person updatedPerson) {
        return personService.updatePerson(id, updatedPerson);
    }

    /**
     * Uses pathvariable of personId to delete person
     * @param id
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Delete(@PathVariable Long id) {
        personService.deletePerson(id);
    }
}
