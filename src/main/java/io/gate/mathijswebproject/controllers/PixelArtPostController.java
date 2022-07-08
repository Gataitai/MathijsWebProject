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

    @GetMapping()
    @JsonView(Views.Public.class)
    public List<PixelArtPost> pixelArtPostIndex(){
        return pixelArtPostService.getAllPixelArtPosts();
    }

    @GetMapping("/{id}")
    @JsonView(Views.Public.class)
    public PixelArtPost pixelArtById(@PathVariable Long id){
        return pixelArtPostService.getPixelArtPostById(id);
    }

    @GetMapping("/title")
    @JsonView(Views.Public.class)
    public List<PixelArtPost> pixelArtByTitle(@RequestParam String title){
        return pixelArtPostService.getPixelArtPostByTitleName(title);
    }

    @GetMapping("/person")
    @JsonView(Views.Public.class)
    public List<PixelArtPost> pixelArtByPersonName(@RequestParam String name){
        return pixelArtPostService.getPixelArtPostByPersonName(name);
    }

    @PostMapping()
    @JsonView(Views.Public.class)
    public PixelArtPost Post(@RequestBody PixelArtPost newPost){
        return pixelArtPostService.savePost(newPost);
    }

    @PutMapping("/{id}")
    @JsonView(Views.Public.class)
    public PixelArtPost update(@PathVariable Long id,@RequestBody PixelArtPost updatedPost) throws JsonProcessingException {
        return pixelArtPostService.updatePost(id, updatedPost);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Delete(@PathVariable Long id){
        pixelArtPostService.deletePost(id);
    }
}