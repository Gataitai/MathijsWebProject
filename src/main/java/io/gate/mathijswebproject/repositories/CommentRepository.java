package io.gate.mathijswebproject.repositories;

import io.gate.mathijswebproject.entities.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {

    List<Comment> findAllByPersonId(long id);

    List<Comment> findAllByPixelArtPostId(long id);

}
