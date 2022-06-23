package io.gate.mathijswebproject.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import io.gate.mathijswebproject.entities.PixelArtPost;
import io.gate.mathijswebproject.exceptions.ResourceNotFoundException;
import io.gate.mathijswebproject.repositories.PixelArtPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class PixelArtPostService {
    private PixelArtPostRepository pixelArtPostRepository;
    public PixelArtPostService(PixelArtPostRepository pixelArtPostRepository) throws JsonProcessingException {
        this.pixelArtPostRepository = pixelArtPostRepository;
        this.pixelArtPostRepository.saveAll(PixelArtPost.makePixelArtPosts());
    }

    public List<PixelArtPost> getAllPixelArtPosts(){
        return this.pixelArtPostRepository.findAll();
    }
    public List<PixelArtPost> getPixelArtPostsByName(String name){
        return this.pixelArtPostRepository.findAllByTitle(name);
    }
    public PixelArtPost getPixelArtPostById(Long id){
        return this.pixelArtPostRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post with id " + id + " not found!"));
    }
    public PixelArtPost savePost(PixelArtPost pixelArtPost){
        return this.pixelArtPostRepository.save(pixelArtPost);
    }
    public void deletePost(Long id){
        this.pixelArtPostRepository.delete(getPixelArtPostById(id));
    }
}
