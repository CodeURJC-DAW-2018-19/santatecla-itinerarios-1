package santatecla.itinerarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.repo.FormRepository;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("forms")
public class FormController {
    private FormRepository repository;

    @Autowired
    public FormController(FormRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public Form findByTitle(@PathVariable Long id) {
        return this.repository.findById(id).orElseThrow(() -> new EntityNotFoundException(Form.class.getName() + " not found with id " + id));
    }

    @PostMapping
    public void addForm(@RequestBody Form form) {
        this.repository.save(form);
    }
}
