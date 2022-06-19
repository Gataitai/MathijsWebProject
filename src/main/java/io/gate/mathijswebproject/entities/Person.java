package io.gate.mathijswebproject.entities;

import io.gate.mathijswebproject.models.grid.Grid;

import javax.persistence.*;
import java.util.List;

@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;
    @Column
    private String userName;

    @OneToMany
    private List<PixelArtPost> pixelArtPosts;

    @OneToMany
    private List<Comment> comments;

    public Person(String userName) {
        this.userName = userName;
    }

    public Person() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
