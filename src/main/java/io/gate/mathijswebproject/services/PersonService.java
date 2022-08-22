package io.gate.mathijswebproject.services;

import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.exceptions.ResourceNotFoundException;
import io.gate.mathijswebproject.repositories.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    private final PersonRepository personRepository;

    public PersonService(PersonRepository personRepository){
        this.personRepository = personRepository;
    }

    /**
     * Uses the personRepository to get a list of all people.
     * @return a list of all people.
     */
    public List<Person> getPeople(){
        return this.personRepository.findAll();
    }

    /**
     * Uses the personRepository to get a person based on the id parameter.
     * @throws ResourceNotFoundException if it can't find the person it will throw a resource not found exception.
     * @param id
     * @return a person by id.
     */
    public Person getPersonById(Long id){
        return this.personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Person with id " + id + " not found!"));
    }

    /**
     * Uses the personRepository to get a list of people based on the name parameter.
     * @param name
     * @return a list of people based on the name parameter.
     */
    public List<Person> getPeopleByName(String name){
        return this.personRepository.findPeopleByNameContainsIgnoreCase(name);
    }

    /**
     * Uses the personRepository to save a new person.
     * Person is given as parameter in the save method.
     * @param person
     * @return the new person.
     */
    public Person savePerson(Person person){
        return this.personRepository.save(person);
    }

    /**
     * Uses the personRepository to update a person.
     * The id is used to get the person by id.
     * The necessary attributes are updated like name and photoLink and not id.
     * The person is given as parameter in the save method.
     * @param id
     * @param updatedPerson
     * @return the updated person.
     */
    public Person updatePerson(Long id, Person updatedPerson){
        Person p = getPersonById(id);
        p.setName(updatedPerson.getName());
        p.setPhotoLink(updatedPerson.getPhotoLink());
        return this.personRepository.save(p);
    }

    /**
     * Uses the personRepository to delete a person.
     * The getPersonById uses the id to search the person and is given as a parameter in the delete method.
     * @param id
     */
    public void deletePerson(Long id){
        this.personRepository.delete(getPersonById(id));
    }
}
