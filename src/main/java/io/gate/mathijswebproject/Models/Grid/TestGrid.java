package io.gate.mathijswebproject.Models.Grid;

import io.gate.mathijswebproject.Models.Enums.Position;

import java.util.LinkedHashMap;
import java.util.Map;

public class TestGrid {
    private Map<Position, Map<Position, GridArea>> grid = new LinkedHashMap<>();

    public TestGrid(){
        Map<Position, Map<Position, GridArea>> rows = new LinkedHashMap<>();
        for(Position row : Position.values()){
            Map<Position, GridArea> columns = new LinkedHashMap<>();
            for(Position column : Position.values()){
                columns.put(column, new GridArea());
            }
            rows.put(row, columns);
        }
        this.grid = rows;
    }

    public Map<Position, Map<Position, GridArea>> getGrid(){
        return grid;
    }
}
