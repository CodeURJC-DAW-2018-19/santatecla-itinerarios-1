package santatecla.itinerarios.controller;

import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.model.Image;
import santatecla.itinerarios.repo.FormRepository;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RepositoryRestController
@RequestMapping("forms")
public class FormController {
    private final FormRepository repository;

    public FormController(FormRepository repository) {
        this.repository = repository;
    }

    @PostMapping(value = "{form}/images")
    public ResponseEntity<Form> addImage(@Valid @PathVariable Form form, @RequestParam List<MultipartFile> images) throws IOException {
        for (MultipartFile image : images) {
            if (image != null) {
                if (image.getOriginalFilename() != null && !image.getOriginalFilename().equals("") && image.getBytes().length > 0) {
                    form.addImage(new Image(image.getOriginalFilename(), form, image.getBytes()));
                }
            }
        }
        return ResponseEntity.ok(this.repository.save(form));
    }

    @PostMapping // TODO: search if it's posible to map file to form
    public ResponseEntity<Form> addForm(@Valid @ModelAttribute Form form, @RequestParam("upload_image") List<MultipartFile> images) throws IOException {
        if (form.getId() == null) form = this.repository.save(form);
        return this.addImage(form, images);
    }
}
