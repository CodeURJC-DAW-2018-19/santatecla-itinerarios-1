package santatecla.itinerarios.controller;

import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.UnitRepository;

@RepositoryRestController
public class UnitController {
    private final UnitRepository repository;

    public UnitController(UnitRepository repository) {
        this.repository = repository;
    }

    @PostMapping("units")
    public ResponseEntity<Unit> addUnit(@ModelAttribute Unit unit) {
        return ResponseEntity.ok(repository.save(unit));
    }
}