package io.gate.mathijswebproject.models.grid;

import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.gate.mathijswebproject.views.Views;

import java.util.*;

public class Grid {
    @JsonView(Views.Public.class)
    private List<Cell> grid;

    public Grid(){
        List<Cell> cells = new LinkedList<>();
        for (int i = 0; i < 256; i++) {
            Cell cell = new Cell(String.valueOf(i));
            cells.add(cell);
        }
        this.grid = cells;
    }

    public List<Cell> getGrid(){
        return this.grid;
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
