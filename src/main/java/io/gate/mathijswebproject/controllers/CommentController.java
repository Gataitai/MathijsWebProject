package io.gate.mathijswebproject.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import io.gate.mathijswebproject.entities.Comment;
import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.services.CommentService;
import io.gate.mathijswebproject.views.Views;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController()
@RequestMapping("/comments")
public class CommentController {
    private CommentService commentService;
    public CommentController(CommentService commentService){
        this.commentService = commentService;
    }

    @GetMapping()
    @JsonView(Views.Comment.class)
    public List<Comment> commentsIndex(){
        return commentService.getComments();
    }

    @PostMapping()
    public Comment post(@RequestBody Comment newComment){
        return commentService.saveComment(newComment);
    }

    @PutMapping()
    public Comment update(@RequestBody Comment updatedComment){
        return commentService.saveComment(updatedComment);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Delete(@PathVariable Long id){
        commentService.deleteComment(id);
    }
}