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

    /**
     * makes 10 new posts with 10 new people.
     * @return list of pixelartpost with 10 posts.
     */
    public static List<PixelArtPost> makePixelArtPosts() {
        List<String> links = new ArrayList<>();
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277877247017001/1.png?ex=66da4630&is=66d8f4b0&hm=3dc9da46fd4e8542a7de9b20f1ad558f5707728f7eed67a8f819e516fc4ac614&");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277877599346699/2.png?ex=66da4630&is=66d8f4b0&hm=075311e3f94912918ef660ed5389e3d1634752e152af06b021691f234c51c4d3&");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1005925098848538694/13279342-pack_l.png?ex=66dab380&is=66d96200&hm=31a5bcb5165fb1aa235d2b0fe83675b091a6f6c757223033b388c5dccd71f9b5&");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277878446592040/4.png?ex=66da4631&is=66d8f4b1&hm=db98c1facfc4f4bb0cc352f7bbdee05cfa00086bd805a2e9329383defe1618cb&");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277878861832242/5.png?ex=66da4631&is=66d8f4b1&hm=3d5ae677646ac884988d18344d371667ff9ca3b02409975d6adb929a6f8f1cdf&");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277879285452851/6.png?ex=66da4631&is=66d8f4b1&hm=543c858bf185a8414c21774ea37ceb254b88015e42917168dfc8af97c3de781b&");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277879696498698/7.png?ex=66da4631&is=66d8f4b1&hm=4adfa986afb4c3c3d680e43a72e46aada8943ab69927b1ed6055ba420fed4d55&");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277879960748152/8.png?ex=66da4631&is=66d8f4b1&hm=434b7352790e24650bb0a0e7c40218a22049e994866fb98209a6f5f239049473&");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277880480825364/9.png?ex=66da4631&is=66d8f4b1&hm=e180dbd2003afa44d9a7689482db782f4ce2508e30c9d8ce60c9729ef4807081&");
        links.add("https://cdn.discordapp.com/attachments/1001277448329109666/1001277880766046309/10.png?ex=66da4631&is=66d8f4b1&hm=d5025f6bcf156e22d8f111291af1e4684111d5665caf9db3c7d7979f7adc915c&");
        List<PixelArtPost> posts = new ArrayList<>();
        for (int i = 1; i < 11; i++) {
            PixelArtPost newPost = new PixelArtPost("TestTitle" + i, new Grid(), new Person("TestPerson" + i, links.get(i - 1)));
            posts.add(newPost);
        }
        return posts;
    }
}
