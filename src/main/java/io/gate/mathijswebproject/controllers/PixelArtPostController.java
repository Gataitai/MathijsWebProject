package io.gate.mathijswebproject.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.core.JsonProcessingException;
import io.gate.mathijswebproject.entities.Comment;
import io.gate.mathijswebproject.entities.PixelArtPost;
import io.gate.mathijswebproject.services.CommentService;
import io.gate.mathijswebproject.services.PixelArtPostService;
import io.gate.mathijswebproject.views.Views;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController()
@RequestMapping("/posts")
public class PixelArtPostController {

    private final PixelArtPostService pixelArtPostService;

    private PixelArtPostController(PixelArtPostService pixelArtPostService){
        this.pixelArtPostService = pixelArtPostService;
    }

    /**
     * gets list of all pixelartposts
     * @return json array of all pixelartposts.
     */
    @GetMapping()
    @JsonView(Views.Public.class)
    public List<PixelArtPost> pixelArtPostIndex(){
        return pixelArtPostService.getAllPixelArtPosts();
    }

    /**
     * Uses pathvariable of id to get pixelArtById.
     * @param id
     * @return json of pixelartpost.
     */
    @GetMapping("/{id}")
    @JsonView(Views.Public.class)
    public PixelArtPost pixelArtById(@PathVariable Long id){
        return pixelArtPostService.getPixelArtPostById(id);
    }

    /**
     * Uses pathvariable of personId on getmapping of /person to get all pixelartposts by person id
     * @param id
     * @return json array of pixelartposts
     */
    @GetMapping("/person/{id}")
    @JsonView(Views.Public.class)
    public List<PixelArtPost> pixelArtByPersonId(@PathVariable Long id){
        return pixelArtPostService.getPixelArtByPersonId(id);
    }

    /**
     * Uses queryparam with title to get the pixelartpost
     * @param title
     * @return json of pixelartpost.
     */
    @GetMapping("/title")
    @JsonView(Views.Public.class)
    public List<PixelArtPost> pixelArtByTitle(@RequestParam String title){
        return pixelArtPostService.getPixelArtPostByTitleName(title);
    }

    /**
     * Uses queryparam with person name to get the pixelartpost
     * @param name
     * @return json of pixelartpost.
     */
    @GetMapping("/person")
    @JsonView(Views.Public.class)
    public List<PixelArtPost> pixelArtByPersonName(@RequestParam String name){
        return pixelArtPostService.getPixelArtPostByPersonName(name);
    }

    /**
     * uses pathvariable of personId from postmapping /person to post a new pixelartpost with pixelartpost in requestbody
     * @param id
     * @return json of the new pixelartpost
     */
    @PostMapping("/person/{id}")
    @JsonView(Views.Public.class)
    public PixelArtPost postPixelArtPost(@PathVariable Long id, @RequestBody PixelArtPost newPost){
        return pixelArtPostService.savePixelArtPost(id, newPost);
    }

    /**
     * uses pathvariable of pixelArtPostId to update the pixelartpost with pixelartpost in requestbody
     * @param id
     * @return json of the updated pixelartpost
     */
    @PutMapping("/{id}")
    @JsonView(Views.Public.class)
    public PixelArtPost update(@PathVariable Long id, @RequestBody PixelArtPost updatedPost){
        return pixelArtPostService.updatePixelArtPost(id, updatedPost);
    }

    /**
     * uses pathaviable of id to delete the pixelartpost
     * @param id
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Delete(@PathVariable Long id){
        pixelArtPostService.deletePixelArtPost(id);
    }
}