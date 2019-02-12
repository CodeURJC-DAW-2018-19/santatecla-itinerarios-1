package santatecla.itinerarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import santatecla.itinerarios.model.View;
import santatecla.itinerarios.repo.ViewRepository;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("views")
public class ViewController {
    private ViewRepository repository;

    @Autowired
    public ViewController(ViewRepository repository){
        this.repository= repository;
    }

    @GetMapping("/{id}")
    public View findByID(@PathVariable Long id){
        return this.repository.findById(id).orElseThrow(()-> new EntityNotFoundException(View.class.getName() + " not found with id " + id));
    }

    @PostMapping
    public void addView(@RequestBody View view) {
        this.repository.save(view);
    }
}
