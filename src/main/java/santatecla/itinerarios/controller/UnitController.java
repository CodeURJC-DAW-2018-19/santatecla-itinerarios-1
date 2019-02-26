package santatecla.itinerarios.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.UnitRepository;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("units")
public class UnitController {

    private UnitRepository repository;

    public UnitController(UnitRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public void addUnit(@ModelAttribute Unit unit) {
        this.repository.save(unit);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteByid(@PathVariable Long id) {
        this.repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/itineraries/{unit}")
    public void addItinerary(@ModelAttribute @Valid @NotNull Itinerary itinerary, @PathVariable @NotNull Unit unit) {
        unit.addItinerary(itinerary);
        this.repository.save(unit);
    }
}
