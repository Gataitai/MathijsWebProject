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

    public List<Person> getPeople(){
        return this.personRepository.findAll();
    }

    public Person getPersonById(Long id){
        return this.personRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Person with id " + id + " not found!"));
    }

    public List<Person> getPeopleByName(String name){
        return this.personRepository.findPeopleByNameContains(name);
    }

    public Person savePerson(Person person){
        return this.personRepository.save(person);
    }

    public Person updatePerson(Long id, Person updatedPerson){
        Person p = getPersonById(id);
        p.setName(updatedPerson.getName());
        p.setPhotoLink(updatedPerson.getPhotoLink());
        return this.personRepository.save(p);
    }

    public void deletePerson(Long id){
        this.personRepository.delete(getPersonById(id));
    }
}
