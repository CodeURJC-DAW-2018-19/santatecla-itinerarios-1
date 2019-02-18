package santatecla.itinerarios.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.repo.FormRepository;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("forms")
public class FormController {
    private FormRepository repository;

    public FormController(FormRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public Form findByTitle(@PathVariable Long id) {
        return this.repository.findById(id).orElseThrow(() -> new EntityNotFoundException(Form.class.getName() + " not found with id " + id));
    }


    @PostMapping("/")
    public void addForm(@ModelAttribute("form") Form form) {
        this.repository.save(form);
    }

    @DeleteMapping("/{id}")
    public void deleteForm(@PathVariable Long id){
        this.repository.deleteById(id);
    }

}
