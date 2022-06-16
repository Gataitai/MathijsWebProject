package io.gate.mathijswebproject.model.grid;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class ImageCell extends Cell {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;
    @Column
    private String imgPath;

    public ImageCell(long id, String imgPath) {
        this.id = id;
        this.imgPath = imgPath;
    }
}
