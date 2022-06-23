package io.gate.mathijswebproject.entities;

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

    @ManyToOne
    @JoinColumn(name = "person_id", nullable = false)
    private Person person;

    @ManyToOne
    @JoinColumn(name = "pixelartpost_id", nullable = false)
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
}
