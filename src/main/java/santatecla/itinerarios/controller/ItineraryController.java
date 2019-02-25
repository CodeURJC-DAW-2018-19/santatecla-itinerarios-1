package santatecla.itinerarios.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
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

    @PostMapping("/{itinerary}")
    public void addSubItinerary(@Valid @ModelAttribute Itinerary subItinerary, @PathVariable Itinerary itinerary) {
        itinerary.addItem(subItinerary);
        this.repository.save(itinerary);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        this.repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{itinerary}/items/{subItinerary}")
    public ResponseEntity<?> deleteSubItinerary(@PathVariable Itinerary itinerary, @PathVariable Itinerary subItinerary) {
        itinerary.removeItem(subItinerary);
        this.repository.save(itinerary);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{itinerary}/items/{originalSubItinerary}")
    public ResponseEntity<?> changeSubItinerary(@PathVariable Itinerary itinerary, @PathVariable Itinerary originalSubItinerary, @RequestParam Itinerary newSubItinerary) {
        itinerary.removeItem(originalSubItinerary);
        itinerary.addItem(newSubItinerary);
        this.repository.save(itinerary);
        return ResponseEntity.ok().build();
    }
}
