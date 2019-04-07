package santatecla.itinerarios.controller;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;

import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PostMapping(path = "/{itinerary}", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
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

    @PostMapping(path = "/{itinerary}/items", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Itinerary> addSubItineraryToItienrary(@PathVariable Itinerary itinerary,
            @Valid @RequestBody Itinerary subItinerary) {
        subItinerary = this.repository.findById(subItinerary.getId()).orElseThrow(EntityNotFoundException::new);
        itinerary.addItem(subItinerary);
        return ResponseEntity.ok(this.repository.save(itinerary));
    }
}