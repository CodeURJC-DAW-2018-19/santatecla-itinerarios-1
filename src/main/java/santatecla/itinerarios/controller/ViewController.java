package santatecla.itinerarios.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.model.View;
import santatecla.itinerarios.repo.ItineraryRepository;
import santatecla.itinerarios.repo.ViewRepository;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("views")
public class ViewController {
    private ViewRepository repository;
    private ItineraryRepository itineraryRepository;

    public ViewController(ViewRepository repository, ItineraryRepository itineraryRepository) {
        this.repository = repository;
        this.itineraryRepository = itineraryRepository;
    }

    @GetMapping("/{id}")
    public View findByID(@PathVariable Long id) {
        return this.repository.findById(id).orElseThrow(() -> new EntityNotFoundException(View.class.getName() + " not found with id " + id));
    }

    @PostMapping("/{itinerary_id}")
    public void addView(@ModelAttribute View view, @PathVariable Long itinerary_id) {
        Itinerary itinerary = this.itineraryRepository.findById(itinerary_id).orElseThrow(() -> new EntityNotFoundException(Itinerary.class.getName() + " not found with id " + itinerary_id));
        itinerary.addItem(view);
        this.itineraryRepository.save(itinerary);
    }

    @PostMapping("/{view}/forms")
    public void addFormToView(@ModelAttribute Form form, @PathVariable View view) {
        view.addForm(form);
        this.repository.save(view);
    }

    @DeleteMapping("/{view}/{form}")
    public ResponseEntity<?> removeForm (@PathVariable View view, @PathVariable Form form){
        view.removeForm(form);
        this.repository.save(view);
        return ResponseEntity.noContent().build();
    }
}
