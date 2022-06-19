package io.gate.mathijswebproject.controllers;

import io.gate.mathijswebproject.entities.Person;
import io.gate.mathijswebproject.entities.PixelArtPost;
import io.gate.mathijswebproject.services.PersonService;
import io.gate.mathijswebproject.services.PixelArtPostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController()
@RequestMapping("/person")
public class PixelArtPostController {
    private PixelArtPostService pixelArtPostService;

    private PixelArtPostController(PixelArtPostService pixelArtPostService){
        this.pixelArtPostService = pixelArtPostService;
    }

//    @GetMapping()
//    public List<PixelArtPost> pixelArtPostIndex(){
//        return pixelArtPostService.getPersons();
//    }
//
//    @PutMapping()
//    public ResponseEntity<PixelArtPost> update(@RequestBody PixelArtPost newPixelArtPost){
//        pixelArtPostService.update(newPixelArtPost);
//        return ResponseEntity.ok(pixelArtPostService.newPixelArtPost);
//    }
}