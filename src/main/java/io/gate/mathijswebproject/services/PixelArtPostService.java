package io.gate.mathijswebproject.services;

import io.gate.mathijswebproject.entities.Comment;
import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.entities.PixelArtPost;
import io.gate.mathijswebproject.exceptions.ResourceNotFoundException;
import io.gate.mathijswebproject.repositories.CommentRepository;
import io.gate.mathijswebproject.repositories.PersonRepository;
import io.gate.mathijswebproject.repositories.PixelArtPostRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
@Service
public class PixelArtPostService {
    private final PixelArtPostRepository pixelArtPostRepository;

    private final PersonRepository personRepository;

    private final PersonService personService;

    public PixelArtPostService(PixelArtPostRepository pixelArtPostRepository, CommentRepository commentRepository, PersonRepository personRepository, PersonRepository personRepository1, PersonService personService) {
        this.pixelArtPostRepository = pixelArtPostRepository;
        this.personRepository = personRepository1;
        this.personService = personService;
        this.pixelArtPostRepository.saveAll(PixelArtPost.makePixelArtPosts());
        //making test comments;
        for (int i = 1; i < 11; i++) {
            for (int j = 1; j < 11; j++) {
                PixelArtPost post = getPixelArtPostById((long) i);

                Optional<Person> optionalPerson = personRepository.findById((long) j);
                Person person = optionalPerson.orElse(new Person());

                Comment comment = new Comment("comment" + j, person, post);
                commentRepository.save(comment);
            }
        }
    }

    /**
     * Uses the pixelArtPostRepository to get a list of all the pixelartposts and sorts it on date.
     * @return a list of pixelartposts.
     */
    public List<PixelArtPost> getAllPixelArtPosts() {
        List<PixelArtPost> posts = this.pixelArtPostRepository.findAll();
        posts.sort(Comparator.comparing(PixelArtPost::getPostDate));
        Collections.reverse(posts);
        return posts;
    }

    /**
     * Uses the pixelArtPostRepository to get a list of all the pixelartposts
     * filtered by person id and sorts it on date.
     * @param id
     * @return a list of pixelartposts from one single person.
     */
    public List<PixelArtPost> getPixelArtByPersonId(Long id) {
        List<PixelArtPost> posts = this.pixelArtPostRepository.findAllByPersonId(id);
        posts.sort(Comparator.comparing(PixelArtPost::getPostDate));
        Collections.reverse(posts);
        return posts;
    }

    /**
     * Uses the pixelArtPostRepository to get a list of all the pixelartposts
     * filtered by title name.
     * @param title
     * @return a list of pixelartposts by title name.
     */
    public List<PixelArtPost> getPixelArtPostByTitleName(String title) {
        return this.pixelArtPostRepository.findPixelArtPostByTitleContainsIgnoreCase(title);
    }

    /**
     * Uses the pixelArtPostRepository to get a list of all the pixelartposts from a person
     * filtered by person name.
     * @param name
     * @return a list of pixelartposts from a person by name.
     */
    public List<PixelArtPost> getPixelArtPostByPersonName(String name) {
        return this.pixelArtPostRepository.findAllByPersonNameContainsIgnoreCase(name);
    }

    /**
     * Uses the pixelArtPostRepository to get a pixelartpost back by id.
     * @throws ResourceNotFoundException if it can't find the post it will throw a resource not found exception.
     * @param id
     * @return a pixelartpost by id.
     */
    public PixelArtPost getPixelArtPostById(Long id) {
        return this.pixelArtPostRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post with id " + id + " not found!"));
    }

    /**
     * Uses the pixelArtPostRepository to save a new pixelartpost
     * it uses the personService to get a person by id to set it to the pixelartpost.
     * then in the save method the pixelartpost object is given as a parameter.
     * @param id
     * @param pixelArtPost
     * @return the saved pixelartpost.
     */
    public PixelArtPost savePixelArtPost(Long id, PixelArtPost pixelArtPost) {
        Person person = personService.getPersonById(id);
        pixelArtPost.setPerson(person);
        return this.pixelArtPostRepository.save(pixelArtPost);
    }

    /**
     * Uses the pixelArtPostRepository to update a pixelartpost
     * it uses the getPixelArtPostById method to get the pixelartpost by id.
     * then it sets the necessary items like title and pixelartpost and not something like id.
     * at last in the save method the pixelartpost object is given as a parameter.
     * @param id
     * @param updatedPost
     * @return the updated pixelartpost.
     */
    public PixelArtPost updatePixelArtPost(Long id, PixelArtPost updatedPost) {
        PixelArtPost pixelArtPost = getPixelArtPostById(id);
        pixelArtPost.setTitle(updatedPost.getTitle());
        pixelArtPost.setPixelArtAsJSON(updatedPost.getPixelArtAsJSON());
        return this.pixelArtPostRepository.save(pixelArtPost);
    }

    /**
     * Uses the pixelArtRepository to delete a pixelartpost
     * The getPixelArtPostById uses the id to search the post and is given as a parameter in the delete method.
     * @param id
     */
    public void deletePixelArtPost(Long id) {
        this.pixelArtPostRepository.delete(getPixelArtPostById(id));
    }
}
