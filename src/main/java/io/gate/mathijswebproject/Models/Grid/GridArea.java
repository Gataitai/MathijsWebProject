package io.gate.mathijswebproject.Models.Grid;

import io.gate.mathijswebproject.Models.Enums.Position;
import io.gate.mathijswebproject.Models.Person.Person;

import java.awt.*;
import java.util.Random;

public class GridArea{
    String row;
    String column;
    private String color;
    private Person person;

    public GridArea(){
        this.color = randomColor();
    }
    private String randomColor(){
        Random random = new Random();

        int nextInt = random.nextInt(0xffffff + 1);

        String colorCode = String.format("#%06x", nextInt);

        return colorCode;
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
    public void setUserName(String userName) {
        this.person.setUserName(userName);
    }
    public String getColor() {
        return this.color;
    }
    public String getUserName() {
        return this.person.getUserName();
    }
    public String getColumn() {
        return column;
    }
    public String getRow() {
        return row;
    }
}
