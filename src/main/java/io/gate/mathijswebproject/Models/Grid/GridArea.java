package io.gate.mathijswebproject.Models.Grid;

import java.awt.*;

public class GridArea {
    private Color color;
    private String userName;

    public GridArea(){
        this.color = Color.red;
        this.userName = "NoUser";
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
}
