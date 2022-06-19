package io.gate.mathijswebproject.services;

import io.gate.mathijswebproject.repositories.PixelArtPostRepository;
import org.springframework.stereotype.Service;

@Service
public class PixelArtPostService {
    private PixelArtPostRepository pixelArtPostRepository;

    public PixelArtPostService(PixelArtPostRepository pixelArtPostRepository){
        this.pixelArtPostRepository = pixelArtPostRepository;
    }
}
