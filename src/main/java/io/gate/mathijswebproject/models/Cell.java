package io.gate.mathijswebproject.models;

import com.fasterxml.jackson.annotation.JsonView;
import io.gate.mathijswebproject.views.Views;
import java.util.Random;

public class Cell{
    @JsonView(Views.Public.class)
    private String id;

    @JsonView(Views.Public.class)
    private String color;

    public Cell(){
    }

    public Cell(String id) {
        this.id = id;
        this.color = randomHexColor();
    }

    private String randomHexColor(){
        Random random = new Random();
        int nextInt = random.nextInt(0xffffff + 1);
        return String.format("#%06x", nextInt);
    }

    public String getId() {
        return this.id;
    }

    public String getColor() {
        return this.color;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
