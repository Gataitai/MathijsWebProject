package io.gate.mathijswebproject.entities;

import com.fasterxml.jackson.annotation.JsonView;
import io.gate.mathijswebproject.views.Views;

import javax.persistence.*;
import java.util.List;

@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    @JsonView(Views.Public.class)
    private Long id;

    @Column
    @JsonView(Views.Public.class)
    private String photoLink;

    @Column
    @JsonView(Views.Public.class)
    private String name;

    @OneToMany(mappedBy = "person", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PixelArtPost> pixelArtPosts;

    @OneToMany(mappedBy = "person", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments;

    public Person() {
    }

    public Person(String name, String photoLink) {
        this.name = name;
        this.photoLink = photoLink;
    }

    public Long getId() {
        return this.id;
    }

    public String getPhotoLink() {
        return this.photoLink;
    }

    public String getName() {
        return this.name;
    }

    public List<PixelArtPost> getPixelArtPosts() {
        return this.pixelArtPosts;
    }

    public List<Comment> getComments() {
        return this.comments;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String userName) {
        if (userName != null) {
            this.name = userName;
        }
    }

    public void setPhotoLink(String photoLink) {
        if (photoLink != null) {
            this.photoLink = photoLink;
        }
    }

    public void setPixelArtPosts(List<PixelArtPost> pixelArtPosts) {
        this.pixelArtPosts = pixelArtPosts;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
