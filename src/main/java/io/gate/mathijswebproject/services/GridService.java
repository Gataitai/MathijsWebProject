package io.gate.mathijswebproject.services;

import io.gate.mathijswebproject.data.GridDataProvider;
import io.gate.mathijswebproject.models.grid.Grid;
import io.gate.mathijswebproject.models.grid.Cell;
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
