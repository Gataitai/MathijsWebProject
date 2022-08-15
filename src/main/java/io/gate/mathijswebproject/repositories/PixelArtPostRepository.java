package io.gate.mathijswebproject.repositories;

import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.entities.PixelArtPost;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PixelArtPostRepository  extends CrudRepository<PixelArtPost, Long> {
    @Override
    List<PixelArtPost> findAll();

    List<PixelArtPost> findAllByPersonId(Long id);

    List<PixelArtPost> findPixelArtPostByTitleContainsIgnoreCase(String title);

    List<PixelArtPost> findPixelArtPostByPersonNameContainsIgnoreCase(String name);
}
