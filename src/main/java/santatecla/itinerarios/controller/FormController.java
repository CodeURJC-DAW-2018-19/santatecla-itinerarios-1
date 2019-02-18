package santatecla.itinerarios.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.FormRepository;
import santatecla.itinerarios.repo.UnitRepository;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@RestController
@RequestMapping("forms")
public class FormController {
    private FormRepository repository;
    private UnitRepository unitRepository;

    public FormController(FormRepository repository, UnitRepository unitRepository) {
        this.repository = repository;
        this.unitRepository = unitRepository;
    }

    @GetMapping("/{id}")
    public Form findByTitle(@PathVariable Long id) {
        return this.repository.findById(id).orElseThrow(() -> new EntityNotFoundException(Form.class.getName() + " not found with id " + id));
    }


    @PostMapping("/{unit_id}") // TODO: i don't like unit_id
    public Form addForm(@ModelAttribute Form form, @PathVariable Long unit_id) {
        final Optional<Unit> unit = this.unitRepository.findById(unit_id);
        unit.ifPresent(form::setUnit);
        return this.repository.save(form);
    }

    @DeleteMapping("/{id}")
    public void deleteForm(@PathVariable Long id) {
        this.repository.deleteById(id);
    }
}
