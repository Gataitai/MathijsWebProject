package io.gate.mathijswebproject.entities;

import com.fasterxml.jackson.annotation.JsonView;
import io.gate.mathijswebproject.views.Views;

import javax.persistence.*;

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
    private String text;

    @ManyToOne()
    @JoinColumn(name = "person_id", nullable = false)
    @JsonView(Views.Public.class)
    private Person person;

    @ManyToOne()
    @JoinColumn(name = "pixelartpost_id", nullable = false)
    private PixelArtPost pixelArtPost;

    public Comment() {
    }

    public Comment(String text, Person person, PixelArtPost pixelArtPost) {
        this.text = text;
        this.person = person;
        this.pixelArtPost = pixelArtPost;
    }

    public long getId() {
        return id;
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
        this.text = text;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public void setPixelArtPost(PixelArtPost pixelArtPost) {
        this.pixelArtPost = pixelArtPost;
    }
}
