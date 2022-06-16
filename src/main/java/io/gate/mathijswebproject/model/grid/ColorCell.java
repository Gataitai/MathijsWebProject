package io.gate.mathijswebproject.model.grid;

import java.util.Random;

public class ColorCell extends Cell {
    private String Color;

    private String createRandomColor(){
        Random random = new Random();

        int nextInt = random.nextInt(0xffffff + 1);

        String colorCode = String.format("#%06x", nextInt);

        return colorCode;
    }

    public void setColor(String color) {
        Color = color;
    }
}


