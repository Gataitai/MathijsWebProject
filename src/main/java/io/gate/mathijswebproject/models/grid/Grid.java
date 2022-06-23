package io.gate.mathijswebproject.models.grid;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.gate.mathijswebproject.models.enums.Position;
import java.util.*;

public class Grid {

    private List<Cell> grid;

    public Grid(){
        List<Cell> cells = new LinkedList<>();

        for(Position row : Position.values()){
            for(Position column : Position.values()){
                Cell cell = new Cell(row.toString(), column.toString());
                cells.add(cell);
            }
        }
        this.grid = cells;
    }

    public List<Cell> getGrid(){
        return this.grid;
    }

    public void updateGridCell(Cell newCell){
        //stream version
        int index = grid.indexOf(grid.stream()
                .filter(gridArea -> gridArea.getRow()
                        .equals(newCell.getRow()) && gridArea.getColumn()
                        .equals(newCell.getColumn())).findAny()
                .orElse(null));

        this.grid.set(index, newCell);
    }

    public void updateGrid(Grid newGrid){
        for (Cell newCell : newGrid.getGrid()) {
            int index = grid.indexOf(grid.stream()
                    .filter(gridArea -> gridArea.getRow()
                            .equals(newCell.getRow()) && gridArea.getColumn()
                            .equals(newCell.getColumn())).findAny()
                    .orElse(null));

            this.grid.set(index, newCell);
        }
    }

    public static Grid convertJSONToGrid(String json) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        return om.readValue(json, Grid.class);
    }

    public static String convertGridToJSON(Grid grid) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        return om.writeValueAsString(grid);
    }

}
