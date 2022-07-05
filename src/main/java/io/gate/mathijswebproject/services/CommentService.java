package io.gate.mathijswebproject.services;

import io.gate.mathijswebproject.entities.Comment;
import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.exceptions.ResourceNotFoundException;
import io.gate.mathijswebproject.repositories.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private CommentRepository commentRepository;
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
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

    public Comment saveComment(Comment comment){
        return  this.commentRepository.save(comment);
    }

    public void deleteComment(Long id){
        this.commentRepository.delete(getCommentById(id));
    }
}
