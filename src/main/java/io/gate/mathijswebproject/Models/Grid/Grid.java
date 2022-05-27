package io.gate.mathijswebproject.Models.Grid;

import io.gate.mathijswebproject.Models.Enums.Position;

import java.util.*;

public class Grid{
    private Rows grid;

    //grid is basically rows, but I wanted it to be called grid
    public Grid() {
        this.grid = new Rows();
    }

    public Rows getGrid() {
        return grid;
    }

    @Override
    public String toString() {
        StringBuilder text = new StringBuilder();

        for(Map.Entry<Position, Columns> entry : grid.getRows().entrySet()){
            Position key = entry.getKey();
            text.append("LinkedHashMap: " + key.toString() + " ");
        }
        return text.toString();
    }
}
