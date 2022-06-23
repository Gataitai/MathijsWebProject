package io.gate.mathijswebproject.models.grid;

import java.awt.*;
import java.util.Random;

public class Cell{
    private String row;
    private String column;
    private String color;

    public Cell(){

    }
    public Cell(String row, String column) {
        this.row = row;
        this.column = column;
        this.color = randomHexColor();
    }

    private String randomHexColor(){
        Random random = new Random();
        int nextInt = random.nextInt(0xffffff + 1);
        return String.format("#%06x", nextInt);
    }

    public void setColumn(String column) {
        this.column = column;
    }
    public void setRow(String row) {
        this.row = row;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public String getColor() {
        return this.color;
    }
    public String getColumn() {
        return column;
    }
    public String getRow() {
        return row;
    }
}
