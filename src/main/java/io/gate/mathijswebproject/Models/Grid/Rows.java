package io.gate.mathijswebproject.Models.Grid;

import io.gate.mathijswebproject.Models.Enums.Position;

import java.util.LinkedHashMap;
import java.util.Map;

public class Rows {
    private Map<Position, Columns> rows;
    public Rows() {
        Map<Position, Columns> rows = new LinkedHashMap<>();

        for (Position pos : Position.values()) {
            Columns cols = new Columns();
            rows.put(pos, cols);
        }

        this.rows = rows;
    }

    public Map<Position, Columns> getRows() {
        return rows;
    }
}
