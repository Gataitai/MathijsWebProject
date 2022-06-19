package io.gate.mathijswebproject.models.grid;

public class Cell{
    private String row;
    private String column;
    private String color;

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
