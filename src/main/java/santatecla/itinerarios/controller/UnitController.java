package santatecla.itinerarios.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.UnitRepository;

@RestController
@RequestMapping("units")
public class UnitController {

    private UnitRepository repository;

    public UnitController(UnitRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public void addUnit(@RequestBody Unit unit) {
        this.repository.save(unit);
    }
}
