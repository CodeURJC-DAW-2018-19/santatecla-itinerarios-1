package santatecla.itinerarios.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.View;
import santatecla.itinerarios.repo.ViewRepository;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("views")
public class ViewController {
    private ViewRepository repository;

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
