package io.gate.mathijswebproject.services;

import io.gate.mathijswebproject.entities.PixelArtPost;
import io.gate.mathijswebproject.repositories.PixelArtPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PixelArtPostService {
    private PixelArtPostRepository pixelArtPostRepository;

    @Autowired
    public PixelArtPostService(PixelArtPostRepository pixelArtPostRepository){
        this.pixelArtPostRepository = pixelArtPostRepository;
    }

//    Iterable<PixelArtPost> allPixelArtPosts = this.pixelArtPostRepository.findAll();

    //pim zij dit.
    public List<PixelArtPost> findAll() {
        return this.pixelArtPostRepository.findAll();
    }
}
