package santatecla.itinerarios.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.repo.FormRepository;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;

@RestController
@RequestMapping("forms")
public class FormController {
    private FormRepository repository;

    public FormController(FormRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public Form findById(@PathVariable Long id) {
        return this.repository.findById(id).orElseThrow(() -> new EntityNotFoundException(Form.class.getName() + " not found with id " + id));
    }

    @PostMapping
    public Form addForm(@Valid @ModelAttribute Form form) {
        return this.repository.save(form);
    }

    @DeleteMapping("/{id}")
    public void deleteForm(@PathVariable Long id) {
        this.repository.deleteById(id);
    }
}
