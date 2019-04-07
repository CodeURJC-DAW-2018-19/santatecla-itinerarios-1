package santatecla.itinerarios.controller;

import javax.validation.Valid;

import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.repo.ItineraryRepository;

@RepositoryRestController
@RequestMapping("itineraries")
public class ItineraryController {
    private ItineraryRepository repository;

    public ItineraryController(ItineraryRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/{itinerary}")
    public ResponseEntity<Itinerary> addSubItinerary(@PathVariable Itinerary itinerary,
            @Valid @RequestParam Itinerary subItinerary) {
        itinerary.addItem(subItinerary);
        return ResponseEntity.ok(this.repository.save(itinerary));
    }

    @PutMapping("/{itinerary}/items/{originalSubItinerary}")
    public ResponseEntity<Itinerary> changeSubItinerary(@PathVariable Itinerary itinerary,
            @PathVariable Itinerary originalSubItinerary, @RequestParam Itinerary newSubItinerary) {
        itinerary.removeItem(originalSubItinerary);
        itinerary.addItem(newSubItinerary);
        return ResponseEntity.ok(this.repository.save(itinerary));
    }
}