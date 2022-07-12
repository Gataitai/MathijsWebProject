package io.gate.mathijswebproject.services;

import io.gate.mathijswebproject.entities.Comment;
import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.entities.PixelArtPost;
import io.gate.mathijswebproject.exceptions.ResourceNotFoundException;
import io.gate.mathijswebproject.repositories.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    private final PersonService personService;

    private final PixelArtPostService pixelArtPostService;

    public CommentService(CommentRepository commentRepository, PersonService personService, PixelArtPostService pixelArtPostService) {
        this.commentRepository = commentRepository;
        this.personService = personService;
        this.pixelArtPostService = pixelArtPostService;
    }

    public List<Comment> getComments(){
        return this.commentRepository.findAll();
    }

    public Comment getCommentById(Long id){
        return this.commentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Comment with id " + id + " not found!"));
    }

    public List<Comment> allCommentsFromPixelArtPostById(Long id){
        return this.commentRepository.findAllByPixelArtPostId(id);
    }

    public List<Comment> allCommentsFromPersonById(Long id){
        return this.commentRepository.findAllByPersonId(id);
    }

    public Comment saveComment(Long postId, Long personId, Comment newComment){
        PixelArtPost pixelArtPost = pixelArtPostService.getPixelArtPostById(postId);
        Person person = personService.getPersonById(personId);
        newComment.setPixelArtPost(pixelArtPost);
        newComment.setPerson(person);
        return  this.commentRepository.save(newComment);
    }

    public Comment updateComment(Long id, Comment updatedComment){
        Comment comment = getCommentById(id);
        comment.setText(updatedComment.getText());
        return this.commentRepository.save(comment);
    }

    public void deleteComment(Long id){
        this.commentRepository.delete(getCommentById(id));
    }
}
