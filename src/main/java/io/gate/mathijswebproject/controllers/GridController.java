package io.gate.mathijswebproject.controllers;

import io.gate.mathijswebproject.models.grid.Grid;
import io.gate.mathijswebproject.models.grid.Cell;
import io.gate.mathijswebproject.services.GridService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController()
@RequestMapping("/grid")
public class GridController {
    private GridService gridService;

    public GridController(GridService gridService){
        this.gridService = gridService;
    }

    @GetMapping()
    public Grid gridIndex(){
        return gridService.getGridService();
    }

    @PutMapping()
    public ResponseEntity<Grid> update(@RequestBody Cell newCell){
        gridService.update(newCell);
        return ResponseEntity.ok(gridService.getGridService());
    }
}
