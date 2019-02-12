package santatecla.itinerarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.UnitRepository;


import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("units")
public class UnitController {

    private UnitRepository repository;

    @Autowired
    public UnitController(UnitRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{title}")
    public Unit findByTitle(@PathVariable String title) {
        return this.repository.findById(title).orElseThrow(() -> new EntityNotFoundException(Unit.class.getName() + " not found with id " + title));
    }

    @PostMapping
    public void addUnit(@RequestBody Unit unit) {
        this.repository.save(unit);
    }
}
