package io.gate.mathijswebproject.controllers;

import io.gate.mathijswebproject.entities.Comment;
import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.services.CommentService;
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
    public List<Comment> commentsIndex(){
        return commentService.getComments();
    }

    @PostMapping()
    @GetMapping()
    public List<Comment> CommentsIndex(){
        return commentService.getComments();
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