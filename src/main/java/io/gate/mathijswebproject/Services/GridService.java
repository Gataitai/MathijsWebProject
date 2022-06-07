package io.gate.mathijswebproject.Services;

import io.gate.mathijswebproject.Data.GridDataProvider;
import io.gate.mathijswebproject.Models.Grid.Grid;
import io.gate.mathijswebproject.Models.Grid.GridArea;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GridService {

    private void GridService(){
        new GridDataProvider();
    }

    public Grid getGridService(){
        return GridDataProvider.grid;
    }

    public Grid update(GridArea newGridArea){
        GridDataProvider.grid.updateGrid(newGridArea);
        return GridDataProvider.grid;
    }
}
