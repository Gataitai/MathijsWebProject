package io.gate.mathijswebproject.Models.Grid;

import io.gate.mathijswebproject.Models.Enums.Position;

import java.awt.*;
import java.util.Random;

public class GridArea{
    String row;
    String column;
    private Color color;
    private String userName;

    public GridArea(){
        this.color = randomColor();
        this.userName = "NoUser";
    }
    private Color randomColor(){
        Random rng = new Random();
        float r = rng.nextFloat();
        float g = rng.nextFloat();
        float b = rng.nextFloat();

        return new Color(r, g, b);
    }
    public void setColumn(String column) {
        this.column = column;
    }
    public void setRow(String row) {
        this.row = row;
    }
    public void setColor(Color color) {
        this.color = color;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getColor() {
        String hex = String.format("#%02x%02x%02x", color.getRed(), color.getGreen(), color.getBlue());
        return hex;
    }
    public String getUserName() {
        return userName;
    }
    public String getColumn() {
        return column;
    }
    public String getRow() {
        return row;
    }
}
