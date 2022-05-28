package io.gate.mathijswebproject.Services;

import io.gate.mathijswebproject.Data.GridDataProvider;
import io.gate.mathijswebproject.Models.Grid.TestGrid;
import org.springframework.stereotype.Service;

@Service
public class GridService {

    private void GridService(){
        new GridDataProvider();
    }

    public TestGrid getGridService(){
        return GridDataProvider.grid;
    }
}
