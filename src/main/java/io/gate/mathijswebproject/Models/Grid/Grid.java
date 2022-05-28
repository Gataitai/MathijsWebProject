package io.gate.mathijswebproject.Models.Grid;

import io.gate.mathijswebproject.Models.Enums.Position;

import java.util.*;

public class Grid {
    private List<GridArea> grid;

    public Grid(){
        List<GridArea> gridAreas = new ArrayList<>();

        for(Position row : Position.values()){
            for(Position column : Position.values()){
                GridArea gridArea = new GridArea();
                gridArea.setRow(row);
                gridArea.setColumn(column);
                gridAreas.add(gridArea);
            }
        }
        this.grid = gridAreas;
    }

    public List<GridArea> getGrid(){
        return this.grid;
    }

//    private Map<Position, Map<Position, GridArea>> grid;
//
//    public Grid(){
//        Map<Position, Map<Position, GridArea>> rows = new LinkedHashMap<>();
//        for(Position row : Position.values()){
//            Map<Position, GridArea> columns = new LinkedHashMap<>();
//            for(Position column : Position.values()){
//                columns.put(column, new GridArea());
//            }
//            rows.put(row, columns);
//        }
//        this.grid = rows;
//    }
//
//    public Map<Position, Map<Position, GridArea>> getGrid(){
//        return grid;
//    }

//    private List<Tuple<Position, List<Tuple<Position, GridArea>>>> grid;
//
//    public Grid(){
//        List<Tuple<Position, List<Tuple<Position, GridArea>>>> rows = new LinkedList<>();
//        for(Position row : Position.values()){
//            List<Tuple<Position, GridArea>> columns = new LinkedList<>();
//            for(Position column : Position.values()){
//                columns.add(new Tuple<>(column, new GridArea()));
//            }
//            rows.add(new Tuple<>(row, columns));
//        }
//        this.grid = rows;
//    }
//
//    public List<Tuple<Position, List<Tuple<Position, GridArea>>>> getGrid(){
//        return grid;
//    }
}
