package io.gate.mathijswebproject.Models.Grid;

import io.gate.mathijswebproject.Models.Enums.Position;

import java.util.*;

public class Grid {
    private List<GridArea> grid;

    public Grid(){
        List<GridArea> gridAreas = new LinkedList<>();

        for(Position row : Position.values()){
            for(Position column : Position.values()){
                GridArea gridArea = new GridArea();
                gridArea.setRow(row.toString());
                gridArea.setColumn(column.toString());
                gridAreas.add(gridArea);
            }
        }
        this.grid = gridAreas;
    }

    public List<GridArea> getGrid(){
        return this.grid;
    }

    public void updateGrid(GridArea newGridArea){
//        for(GridArea gridArea : grid){
//            if(gridArea.getRow().equals(newGridArea.getRow()) && gridArea.getColumn().equals(newGridArea.getColumn())){
//                int index = grid.indexOf(gridArea);
//                grid.set(index, newGridArea);
//                return grid;
//            }
//        }
//        return null;

        //stream version
        int index = grid.indexOf(grid.stream()
                .filter(gridArea -> gridArea.getRow()
                        .equals(newGridArea.getRow()) && gridArea.getColumn()
                        .equals(newGridArea.getColumn())).findAny()
                .orElse(null));
        grid.set(index, newGridArea);
    }

}
