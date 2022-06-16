package io.gate.mathijswebproject.model.grid;

import io.gate.mathijswebproject.model.enums.Position;

import javax.persistence.*;
import java.util.*;

@Entity
@Table
public class Grid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column()
    private Long id;

    @Column
    @OneToMany
    private List<Cell> grid;

    public Grid(){
        List<Cell> cells = new LinkedList<>();

        for(Position row : Position.values()){
            for(Position column : Position.values()){
                Cell cell = new Cell();
                cell.setRow(row.toString());
                cell.setColumn(column.toString());
                cells.add(cell);
            }
        }
        this.grid = cells;
    }

    public List<Cell> getGrid(){
        return this.grid;
    }

    public void updateGrid(Cell newCell){
        //stream version
        int index = grid.indexOf(grid.stream()
                .filter(gridArea -> gridArea.getRow()
                        .equals(newCell.getRow()) && gridArea.getColumn()
                        .equals(newCell.getColumn())).findAny()
                .orElse(null));
        grid.set(index, newCell);
    }

}
