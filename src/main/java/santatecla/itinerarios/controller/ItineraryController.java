package santatecla.itinerarios.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.repo.ItineraryRepository;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;

@RestController
@RequestMapping("itineraries")
public class ItineraryController {
    private ItineraryRepository repository;

    public ItineraryController(ItineraryRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public Itinerary findByTitle(@PathVariable Long id) {
        return this.repository.findById(id).orElseThrow(() -> new EntityNotFoundException(Itinerary.class.getName() + " not found with id " + id));
    }

    @PostMapping
    public void addItinerary(@Valid @ModelAttribute Itinerary itinerary) {
        this.repository.save(itinerary);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        this.repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
