package io.gate.mathijswebproject.controllers;

import io.gate.mathijswebproject.entities.Comment;
import io.gate.mathijswebproject.entities.PixelArtPost;
import io.gate.mathijswebproject.services.CommentService;
import io.gate.mathijswebproject.services.PixelArtPostService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController()
@RequestMapping("/posts")
public class PixelArtPostController {
    private PixelArtPostService pixelArtPostService;

    private PixelArtPostController(PixelArtPostService pixelArtPostService){
        this.pixelArtPostService = pixelArtPostService;
    }
    @GetMapping()
    public List<PixelArtPost> pixelArtPostIndex(){
        return pixelArtPostService.getAllPixelArtPosts();
    }
    @GetMapping("/{id}")
    public PixelArtPost pixelArtById(@PathVariable Long id){
        return pixelArtPostService.getPixelArtPostById(id);
    }

    @GetMapping("/{name}")
    public List<PixelArtPost> pixelArtByTitleName(@PathVariable String name){
        return pixelArtPostService.getPixelArtPostByTitleName(name);
    }
    @PostMapping()
    public PixelArtPost Post(@RequestBody PixelArtPost newPost){
        return pixelArtPostService.savePost(newPost);
    }

    @PutMapping()
    public PixelArtPost update(@RequestBody PixelArtPost updatedPost){
        return pixelArtPostService.savePost(updatedPost);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Delete(@PathVariable Long id){
        pixelArtPostService.deletePost(id);
    }
}