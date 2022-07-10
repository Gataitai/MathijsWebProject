package io.gate.mathijswebproject.entities;

import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.core.JsonProcessingException;
import io.gate.mathijswebproject.models.Grid;
import io.gate.mathijswebproject.views.Views;

import javax.persistence.*;
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

    @OneToMany(mappedBy = "pixelArtPost", cascade = CascadeType.ALL, orphanRemoval = true)
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

    public Person getPerson() {
        return person;
    }

    public Grid getPixelArtAsJSON() throws JsonProcessingException {
        if(this.pixelArtAsJSON != null){
            return Grid.convertJSONToGrid(this.pixelArtAsJSON);
        }
        return null;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setTitle(String title) {
        if(title != null){
            this.title = title;
        }
    }

    public void setPixelArtAsJSON(Grid pixelArt) throws JsonProcessingException {
        if(pixelArt != null){
            this.pixelArtAsJSON = Grid.convertGridToJSON(pixelArt);
        }
    }

    public void setPerson(Person person) {
        if(person != null){
            this.person = person;
        }
    }

    public void setComments(List<Comment> comments) {
        if(comments != null){
            this.comments = comments;
        }
    }

    public void setComment(Comment comment){
        if(comment != null){
            this.comments.add(comment);
        }
    }

    public static List<PixelArtPost> makePixelArtPosts() throws JsonProcessingException {
        List<PixelArtPost> posts = new ArrayList<>();
        for (int i = 1; i < 11; i++) {
            PixelArtPost newPost = new PixelArtPost("testTitle" + i, new Grid(), new Person("testPerson" + i, "https://cdn.discordapp.com/attachments/605115690931847172/992802154437943356/8.png"));
            posts.add(newPost);
        }
        return posts;
    }
}
