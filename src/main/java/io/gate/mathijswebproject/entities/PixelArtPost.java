package io.gate.mathijswebproject.entities;

import com.fasterxml.jackson.core.JsonProcessingException;
import io.gate.mathijswebproject.models.grid.Grid;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class PixelArtPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @Column
    private String pixelArtAsJSON;

    @ManyToOne
    private Person person;

    @OneToMany
    private List<Comment> comments;

    public PixelArtPost() {

    }

    public PixelArtPost(Grid grid, Person person) throws JsonProcessingException {
        this.pixelArtAsJSON = Grid.convertGridToJSON(grid);
        this.person = person;
    }

    public long getId() {
        return id;
    }

    public Grid getPixelArt() throws JsonProcessingException {
        return Grid.convertJSONToGrid(pixelArtAsJSON);
    }

    public Person getUser() {
        return person;
    }

    public List<Comment> getComments() {
        return comments;
    }
}
