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

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    /**
     * Uses pathvariable of id to get comment with commentId
     * @param id
     * @return json of comment.
     */
    @GetMapping("/{id}")
    @JsonView(Views.Public.class)
    public Comment commentById(@PathVariable Long id) {
        return commentService.getCommentById(id);
    }

    /**
     * uses pathvariable of id from getmapping /post to get comments with pixelArtPostId
     * @param id
     * @return json array of comments
     */
    @GetMapping("/post/{id}")
    @JsonView(Views.Public.class)
    public List<Comment> commentsByPixelArtPostId(@PathVariable Long id) {
        return commentService.allCommentsFromPixelArtPostById(id);
    }

    /**
     * uses pathvariable of postId, personId from postmapping /post/{}/person/{} to post a new comment with comment in requestbody
     * @param postId
     * @param personId
     * @param newComment
     * @return json of the new comment
     */
    @PostMapping("/post/{postId}/person/{personId}")
    @JsonView(Views.Public.class)
    public Comment post(@PathVariable Long postId, @PathVariable Long personId, @RequestBody Comment newComment) {
        return commentService.saveComment(postId, personId, newComment);
    }

    /**
     * uses pathvariable of id to update comment with comment in requestbody
     * @param id
     * @param updatedComment
     * @return json of the updated comment
     */
    @PutMapping("/{id}")
    @JsonView(Views.Public.class)
    public Comment update(@PathVariable Long id, @RequestBody Comment updatedComment) {
        return commentService.updateComment(id, updatedComment);
    }

    /**
     * uses pathaviable of id to delete the comment
     * @param id
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Delete(@PathVariable Long id) {
        commentService.deleteComment(id);
    }
}