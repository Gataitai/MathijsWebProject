package io.gate.mathijswebproject.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.core.JsonProcessingException;
import io.gate.mathijswebproject.models.grid.Grid;
import io.gate.mathijswebproject.views.Views;

import javax.persistence.*;
import javax.swing.text.View;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class PixelArtPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    @JsonView(Views.Public.class)
    private Long id;
    @Column
    @JsonView(Views.Public.class)
    private String title;
    @Column(length = 11018)
    @JsonView(Views.Public.class)
    private String pixelArtAsJSON;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "person_id", nullable = false)
    @JsonView(Views.Public.class)
    private Person person;
    @OneToMany(mappedBy = "pixelArtPost")
    @JsonView(Views.Public.class)
    private List<Comment> comments;
    public PixelArtPost() {
    }
    public PixelArtPost(String title, Grid grid, Person person) throws JsonProcessingException {
        this.title = title;
        this.pixelArtAsJSON = Grid.convertGridToJSON(grid);
        this.person = person;
    }
    public Long getId() {
        return id;
    }

    public String getTitle() { return this.title; }

    public Person getUser() {
        return person;
    }

    public Grid getPixelArtAsJSON() throws JsonProcessingException {
        return Grid.convertJSONToGrid(pixelArtAsJSON);
    }
    public List<Comment> getComments() {
        return comments;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPixelArtAsJSON(Grid pixelArt) throws JsonProcessingException {
        this.pixelArtAsJSON = Grid.convertGridToJSON(pixelArt);
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
    public void setComment(Comment comment){
        this.comments.add(comment);
    }

    public static List<PixelArtPost> makePixelArtPosts() throws JsonProcessingException {
        List<PixelArtPost> posts = new ArrayList<>();
        for (int i = 1; i < 11; i++) {
            PixelArtPost newPost = new PixelArtPost("testTitle" + i, new Grid(), new Person("testPerson" + i));
            posts.add(newPost);
        }
        return posts;
    }
}
