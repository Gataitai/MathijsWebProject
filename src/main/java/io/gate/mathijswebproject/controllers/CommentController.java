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

    private final CommentService commentService;

    public CommentController(CommentService commentService){
        this.commentService = commentService;
    }

    @GetMapping()
    @JsonView(Views.Public.class)
    public List<Comment> commentsIndex(){
        return commentService.getComments();
    }

    @GetMapping("/post/{id}")
    @JsonView(Views.Public.class)
    public List<Comment> commentsByPixelArtPostId(@PathVariable Long id){
        return commentService.allCommentsFromPixelArtPostById(id);
    }

    @PostMapping("/post/{postId}/person/{personId}")
    @JsonView(Views.Public.class)
    public Comment post(@PathVariable Long postId, @PathVariable Long personId,@RequestBody Comment newComment){
        return commentService.saveComment(postId, personId, newComment);
    }

    @PutMapping("/{id}")
    @JsonView(Views.Public.class)
    public Comment update(@PathVariable Long id, @RequestBody Comment updatedComment){
        return commentService.updateComment(id, updatedComment);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Delete(@PathVariable Long id){
        commentService.deleteComment(id);
    }
}