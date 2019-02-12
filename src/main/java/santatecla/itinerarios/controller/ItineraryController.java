package santatecla.itinerarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.repo.ItineraryRepository;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("itineraries")
public class ItineraryController {
    private ItineraryRepository repository;

    @Autowired
    public ItineraryController(ItineraryRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public Itinerary findByTitle(@PathVariable Long id) {
        return this.repository.findById(id).orElseThrow(() -> new EntityNotFoundException(Itinerary.class.getName() + " not found with id " + id));
    }

    @PostMapping
    public void addItinerary(@RequestBody Itinerary itinerary) {
        this.repository.save(itinerary);
    }
}
