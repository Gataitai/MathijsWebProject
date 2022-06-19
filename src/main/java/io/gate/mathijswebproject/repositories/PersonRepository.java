package io.gate.mathijswebproject.repositories;

import io.gate.mathijswebproject.entities.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository  extends CrudRepository<Person, Long> {
    @Override
    List<Person> findAll();

    List<Person> findAllByName(String name);

    Person findPersonByName(String name);

}
