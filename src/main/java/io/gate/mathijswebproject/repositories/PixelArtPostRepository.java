package io.gate.mathijswebproject.repositories;

import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.entities.PixelArtPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PixelArtPostRepository  extends JpaRepository<PixelArtPost, Long> {
    List<PixelArtPost> findAllByTitle(String title);
}
