package io.gate.mathijswebproject.entities;

import com.fasterxml.jackson.core.JsonProcessingException;
import io.gate.mathijswebproject.models.grid.Grid;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class PixelArtPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @Column
    private String title;

    @Column(length = 11018)
    private String pixelArtAsJSON;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "person_id", nullable = false)
    private Person person;

    @OneToMany(mappedBy = "person")
    private List<Comment> comments;

    public PixelArtPost() {

    }

    public PixelArtPost(String title, Grid grid, Person person) throws JsonProcessingException {
        this.title = title;
        this.pixelArtAsJSON = Grid.convertGridToJSON(grid);
        this.person = person;
    }

    public long getId() {
        return id;
    }

    public String getTitle() { return this.title; }

    public Person getUser() {
        return person;
    }

    public Grid getPixelArt() throws JsonProcessingException {
        return Grid.convertJSONToGrid(pixelArtAsJSON);
    }
    public List<Comment> getComments() {
        return comments;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPixelArtAsJSON(String pixelArt){
        this.pixelArtAsJSON = pixelArt;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public static List<PixelArtPost> makePixelArtPosts() throws JsonProcessingException {
        List<PixelArtPost> posts = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            posts.add(new PixelArtPost("testTitle" + i, new Grid(), new Person("testPerson" + i)));
        }
        return posts;
    }
}
