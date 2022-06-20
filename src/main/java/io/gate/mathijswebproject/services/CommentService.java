package io.gate.mathijswebproject.services;

import io.gate.mathijswebproject.entities.Comment;
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
}
