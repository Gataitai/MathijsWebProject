package io.gate.mathijswebproject.service;

import io.gate.mathijswebproject.data.GridDataProvider;
import io.gate.mathijswebproject.model.grid.Grid;
import io.gate.mathijswebproject.model.grid.Cell;
import org.springframework.stereotype.Service;

@Service
public class GridService {

    private void GridService(){
        new GridDataProvider();
    }

    public Grid getGridService(){
        return GridDataProvider.grid;
    }

    public Grid update(Cell newCell){
        GridDataProvider.grid.updateGrid(newCell);
        return GridDataProvider.grid;
    }
}
