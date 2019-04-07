package santatecla.itinerarios.controller;

import javax.validation.constraints.NotNull;

import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.model.View;
import santatecla.itinerarios.repo.ViewRepository;

@RepositoryRestController
@RequestMapping("views")
public class ViewController {
    private ViewRepository repository;

    public ViewController(ViewRepository repository) {
        this.repository = repository;
    }

    @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<View> addView(@ModelAttribute View view) {
        return ResponseEntity.ok(this.repository.save(view));
    }

    @PostMapping("/{view}/forms")
    public ResponseEntity<View> addFormToView(@ModelAttribute Form form, @PathVariable View view) {
        view.addForm(form);
        return ResponseEntity.ok(this.repository.save(view));
    }

    @DeleteMapping("/{view}/{form}")
    public ResponseEntity<?> removeForm(@PathVariable View view, @PathVariable Form form) {
        view.removeForm(form);
        this.repository.save(view);
        return ResponseEntity.noContent().build();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<View> postView(@RequestBody @NotNull View view) {
        return ResponseEntity.ok(this.repository.save(view));
    }

    @DeleteMapping(path = "/{view}/forms/{form}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteFileFromView(@PathVariable View view, @PathVariable Form form) {
        view.removeForm(form);
        this.repository.save(view);
        return ResponseEntity.noContent().build();
    }

    @PostMapping(path = "/{view}/forms", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<View> addFileToView(@PathVariable View view, @RequestBody Form form) {
        view.addForm(form);
        return ResponseEntity.ok(this.repository.save(view));
    }
}
