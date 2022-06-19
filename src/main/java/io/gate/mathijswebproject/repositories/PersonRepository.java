package io.gate.mathijswebproject.repositories;

import io.gate.mathijswebproject.entities.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository  extends CrudRepository<Person, Long> {
}
