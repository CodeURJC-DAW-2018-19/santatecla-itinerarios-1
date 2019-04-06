package santatecla.itinerarios.controller;

import javax.validation.constraints.NotNull;

import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.UnitRepository;

@RepositoryRestController
@RequestMapping("units")
public class UnitController {
    private final UnitRepository repository;

    public UnitController(UnitRepository repository) {
        this.repository = repository;
    }

    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<Unit> addUnit(@ModelAttribute @NotNull Unit unit) {
        return ResponseEntity.ok(repository.save(unit));
    }

    @PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<Unit> postUnit(@RequestBody @NotNull Unit unit) {
        return ResponseEntity.ok(repository.save(unit));
    }
}