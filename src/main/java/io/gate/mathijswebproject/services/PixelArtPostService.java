package io.gate.mathijswebproject.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import io.gate.mathijswebproject.entities.Comment;
import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.entities.PixelArtPost;
import io.gate.mathijswebproject.exceptions.ResourceNotFoundException;
import io.gate.mathijswebproject.repositories.CommentRepository;
import io.gate.mathijswebproject.repositories.PersonRepository;
import io.gate.mathijswebproject.repositories.PixelArtPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PixelArtPostService {
    private final PixelArtPostRepository pixelArtPostRepository;

    public PixelArtPostService(PixelArtPostRepository pixelArtPostRepository, CommentRepository commentRepository, PersonRepository personRepository){
        this.pixelArtPostRepository = pixelArtPostRepository;
        this.pixelArtPostRepository.saveAll(PixelArtPost.makePixelArtPosts());
        //making test comments;
        for (int i = 1; i < 11; i++) {
            PixelArtPost post = getPixelArtPostById((long) i);

            Optional<Person> optionalPerson = personRepository.findById((long) i);
            Person person = optionalPerson.orElse(new Person());

            Comment comment = new Comment("Commenting on myself. From: " + person.getName(), person, post);
            commentRepository.save(comment);
        }
    }
    public List<PixelArtPost> getAllPixelArtPosts(){
        return this.pixelArtPostRepository.findAll();
    }

    public List<PixelArtPost> getPixelArtPostByTitleName(String title){
        return this.pixelArtPostRepository.findAllByTitle(title);
    }

    public List<PixelArtPost> getPixelArtPostByPersonName(String name){
        return this.pixelArtPostRepository.findAllByPersonName(name);
    }

    public PixelArtPost getPixelArtPostById(Long id){
        return this.pixelArtPostRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post with id " + id + " not found!"));
    }

    public PixelArtPost savePixelArtPost(PixelArtPost pixelArtPost){
        return this.pixelArtPostRepository.save(pixelArtPost);
    }

    public PixelArtPost updatePixelArtPost(Long id, PixelArtPost updatedPost){
        PixelArtPost pixelArtPost = getPixelArtPostById(id);
        pixelArtPost.setTitle(updatedPost.getTitle());
        pixelArtPost.setPixelArtAsJSON(updatedPost.getPixelArtAsJSON());
        return this.pixelArtPostRepository.save(pixelArtPost);
    }

    public void deletePixelArtPost(Long id){
        this.pixelArtPostRepository.delete(getPixelArtPostById(id));
    }
}
