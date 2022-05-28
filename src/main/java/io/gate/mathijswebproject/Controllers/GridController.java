package io.gate.mathijswebproject.Controllers;

import io.gate.mathijswebproject.Models.Grid.Grid;
import io.gate.mathijswebproject.Services.GridService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
