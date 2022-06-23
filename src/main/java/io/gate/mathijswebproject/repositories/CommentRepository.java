package io.gate.mathijswebproject.repositories;

import io.gate.mathijswebproject.entities.Comment;
import io.gate.mathijswebproject.entities.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {
    @Override
    List<Comment> findAll();

    List<Comment> findAllByPersonId(Long id);

    List<Comment> findAllByPixelArtPostId(Long id);

}
