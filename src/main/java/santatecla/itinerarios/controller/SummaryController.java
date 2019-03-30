package santatecla.itinerarios.controller;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.fasterxml.jackson.annotation.JsonView;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.model.SummaryView;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.ItineraryRepository;
import santatecla.itinerarios.repo.UnitRepository;

@RestController
@RequestMapping("/summary")
public class SummaryController {
    private UnitRepository unitRepository;
    private ItineraryRepository itineraryRepository;

    public SummaryController(UnitRepository repository, ItineraryRepository itineraryRepository) {
        this.unitRepository = repository;
        this.itineraryRepository = itineraryRepository;
    }

    @JsonView(SummaryView.Unit.class)
    @GetMapping("units")
    public List<Unit> units() {
        return this.unitRepository.findAll();
    }

    @JsonView(SummaryView.Itinerary.class)
    @GetMapping("/itineraries/{id}")
    public Itinerary itineraries(@PathVariable Long id) {
        return this.itineraryRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }
}
