package io.gate.mathijswebproject.Models.Grid;

import io.gate.mathijswebproject.Models.Enums.Position;

import java.awt.*;

public class GridArea{
    Position row;
    Position column;
    private Color color;
    private String userName;

    public GridArea(){
        this.color = Color.red;
        this.userName = "NoUser";
    }
    public void setColumn(Position column) {
        this.column = column;
    }
    public void setRow(Position row) {
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
    public Position getColumn() {
        return column;
    }
    public Position getRow() {
        return row;
    }
}
