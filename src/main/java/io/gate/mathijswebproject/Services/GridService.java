package io.gate.mathijswebproject.Services;

import io.gate.mathijswebproject.Data.GridDataProvider;
import io.gate.mathijswebproject.Models.Grid.Grid;
import org.springframework.stereotype.Service;

@Service
public class GridService {

    private void GridService(){
        new GridDataProvider();
    }

    public Grid getGridService(){
        return GridDataProvider.grid;
    }
}
