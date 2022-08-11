package io.gate.mathijswebproject.entities;

import com.fasterxml.jackson.annotation.JsonView;
import io.gate.mathijswebproject.models.Grid;
import io.gate.mathijswebproject.views.Views;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
    private LocalDateTime postDate;

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
        this.postDate = LocalDateTime.now();
    }

    public PixelArtPost(String title, Grid grid, Person person) {
        this.postDate = LocalDateTime.now();
        this.title = title;
        this.person = person;
        setPixelArtAsJSON(grid);
    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getPostDate() {
        return this.postDate;
    }

    public String getTitle() {
        return this.title;
    }

    public Person getPerson() {
        return person;
    }

    public Grid getPixelArtAsJSON() {
        return Grid.convertJSONToGrid(this.pixelArtAsJSON);
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setTitle(String title) {
        if (title != null) {
            this.title = title;
        }
    }

    public void setPixelArtAsJSON(Grid pixelArt) {
        if (pixelArt != null) {
            this.pixelArtAsJSON = Grid.convertGridToJSON(pixelArt);
        }
    }

    public void setPerson(Person person) {
        if (person != null) {
            this.person = person;
        }
    }

    public void setComments(List<Comment> comments) {
        if (comments != null) {
            this.comments = comments;
        }
    }

    public void setComment(Comment comment) {
        if (comment != null) {
            this.comments.add(comment);
        }
    }

    public static List<PixelArtPost> makePixelArtPosts() {
        List<String> links = new ArrayList<>();
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277877247017001/1.png");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277877599346699/2.png");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1005925098848538694/13279342-pack_l.png");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277878446592040/4.png");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277878861832242/5.png");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277879285452851/6.png");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277879696498698/7.png");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277879960748152/8.png");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277880480825364/9.png");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277880766046309/10.png");
        List<PixelArtPost> posts = new ArrayList<>();
        for (int i = 1; i < 11; i++) {
            PixelArtPost newPost = new PixelArtPost("TestTitle" + i, new Grid(), new Person("TestPerson" + i, links.get(i - 1)));
            posts.add(newPost);
        }
        return posts;
    }
}
