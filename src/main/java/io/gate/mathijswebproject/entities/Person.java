package io.gate.mathijswebproject.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;
import java.util.Random;

@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String photoId;
    @Column
    private String name;

    @OneToMany(mappedBy = "person")
    private List<PixelArtPost> pixelArtPosts;

    @OneToMany(mappedBy = "person")
    private List<Comment> comments;

    public Person(String name) {
        this.name = name;
        this.photoId = String.valueOf(randomPhotoId());
    }

    public Person() {
    }
    public Long getId() { return id; }

    public String getPhotoId() {return photoId; }
    public String getName() {
        return name;
    }

    public void setName(String userName) {
        this.name = userName;
    }

    public void setPhotoId(String photoId) { this.photoId = photoId; }

    private int randomPhotoId(){
        Random random = new Random();
        return random.nextInt(10 - 1 + 1) + 1;
    }
}
