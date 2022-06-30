package io.gate.mathijswebproject.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;
    @Column
    private String text;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "person_id", nullable = false)
    @JsonIgnore
    private Person person;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "pixelartpost_id", nullable = false)
    @JsonIgnore
    private PixelArtPost pixelArtPost;
    public Comment(String text) {
        this.text = text;
    }
    public Comment() {
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
