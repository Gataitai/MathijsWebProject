package io.gate.mathijswebproject.Controllers;

import io.gate.mathijswebproject.Models.Grid.Grid;
import io.gate.mathijswebproject.Models.Grid.GridArea;
import io.gate.mathijswebproject.Services.GridService;
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
    public ResponseEntity<Grid> update(@RequestBody GridArea newGridArea){
        gridService.update(newGridArea);
        return ResponseEntity.ok(gridService.getGridService());
    }

}
