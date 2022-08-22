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

    /**
     * Uses the commentRepository to get a comment by id.
     * @param id
     * @return comment by id.
     */
    public Comment getCommentById(Long id) {
        return this.commentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Comment with id " + id + " not found!"));
    }

    /**
     * Uses the commentRepository to find all the comments by pixelartpost by id.
     * @param id
     * @return list of comments filtered by pixelartpost id.
     */
    public List<Comment> allCommentsFromPixelArtPostById(Long id) {
        return this.commentRepository.findAllByPixelArtPostId(id);
    }

    /**
     * Uses the commentRepository to find all comments by person by id.
     * @param id
     * @return list of comments filtered by person id.
     */
    public List<Comment> allCommentsFromPersonById(Long id) {
        return this.commentRepository.findAllByPersonId(id);
    }

    /**
     * Uses the commentRepository to save a comment.
     * to set the pixelartpost to comment it uses the pixelArtPostService to get post by id.
     * to set the person to comment it uses personService to get person by id.
     * comment is given as parameter in save method.
     * @param postId
     * @param personId
     * @param newComment
     * @return the new comment.
     */
    public Comment saveComment(Long postId, Long personId, Comment newComment) {
        PixelArtPost pixelArtPost = pixelArtPostService.getPixelArtPostById(postId);
        Person person = personService.getPersonById(personId);
        newComment.setPixelArtPost(pixelArtPost);
        newComment.setPerson(person);
        return this.commentRepository.save(newComment);
    }

    /**
     * Uses the commentRepository to update a comment.
     * To get the comment a getCommentById is done.
     * the comment text is set by the updatedComment.
     * comment is given as parameter in save method.
     * @param id
     * @param updatedComment
     * @return the updated comment.
     */
    public Comment updateComment(Long id, Comment updatedComment) {
        Comment comment = getCommentById(id);
        comment.setText(updatedComment.getText());
        return this.commentRepository.save(comment);
    }

    /**
     * Uses the commentRepository to delete a comment.
     * The getCommentByID uses the id to search the comment and is given as a parameter in the delete method.
     * @param id
     */
    public void deleteComment(Long id) {
        this.commentRepository.delete(getCommentById(id));
    }
}
