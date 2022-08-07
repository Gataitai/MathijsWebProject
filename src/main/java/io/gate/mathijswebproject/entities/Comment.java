package io.gate.mathijswebproject.entities;

import com.fasterxml.jackson.annotation.JsonView;
import io.gate.mathijswebproject.views.Views;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    @JsonView(Views.Public.class)
    private long id;

    @Column
    @JsonView(Views.Public.class)
    private LocalDateTime commentDate;

    @Column
    @JsonView(Views.Public.class)
    private String text;

    @ManyToOne()
    @JoinColumn(name = "person_id", nullable = false)
    @JsonView(Views.Public.class)
    private Person person;

    @ManyToOne()
    @JoinColumn(name = "pixelartpost_id", nullable = false)
    private PixelArtPost pixelArtPost;

    public Comment() {
        this.commentDate = LocalDateTime.now();
    }

    public Comment(String text, Person person, PixelArtPost pixelArtPost) {
        this.commentDate = LocalDateTime.now();
        this.text = text;
        this.person = person;
        this.pixelArtPost = pixelArtPost;
    }

    public long getId() {
        return id;
    }

    public LocalDateTime getCommentDate() {
        return this.commentDate;
    }

    public String getText() {
        return text;
    }

    public Person getPerson() {
        return person;
    }

    public PixelArtPost getPixelArtPost() {
        return pixelArtPost;
    }

    public void setText(String text) {
        if(text != null){
            this.text = text;
        }
    }

    public void setPerson(Person person) {
        if(person != null){
            this.person = person;
        }
    }

    public void setPixelArtPost(PixelArtPost pixelArtPost) {
        if(pixelArtPost != null){
            this.pixelArtPost = pixelArtPost;
        }
    }
}
