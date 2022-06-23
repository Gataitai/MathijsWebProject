package io.gate.mathijswebproject.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String name;

    @OneToMany(mappedBy = "person")
    private List<PixelArtPost> pixelArtPosts;

    @OneToMany(mappedBy = "person")
    private List<Comment> comments;

    public Person(String name) {
        this.name = name;
    }

    public Person() {
    }
    public Long getId() { return id; }

    public String getName() {
        return name;
    }

    public void setName(String userName) {
        this.name = userName;
    }
}
