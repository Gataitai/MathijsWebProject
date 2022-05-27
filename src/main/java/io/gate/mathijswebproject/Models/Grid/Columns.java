package io.gate.mathijswebproject.Models.Grid;

import io.gate.mathijswebproject.Models.Enums.Position;

import java.awt.*;
import java.util.LinkedHashMap;
import java.util.Map;

public class Columns {
    Map<Position, GridArea> columns = new LinkedHashMap<>();

    public Columns() {
        for (Position pos : Position.values()) {
            columns.put(pos, new GridArea());
        }
    }

    public Map<Position, GridArea> getColumns() {
        return columns;
    }
}
