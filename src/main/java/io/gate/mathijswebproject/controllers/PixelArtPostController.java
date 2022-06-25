package io.gate.mathijswebproject.controllers;

import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.entities.PixelArtPost;
import io.gate.mathijswebproject.services.PersonService;
import io.gate.mathijswebproject.services.PixelArtPostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PutMapping()
    public PixelArtPost update(@RequestBody PixelArtPost newPost){
        return pixelArtPostService.savePost(newPost);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void Delete(@PathVariable Long id){
        pixelArtPostService.deletePost(id);
    }
}