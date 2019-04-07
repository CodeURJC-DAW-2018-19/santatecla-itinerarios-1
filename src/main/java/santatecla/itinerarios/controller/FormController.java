package santatecla.itinerarios.controller;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.model.Image;
import santatecla.itinerarios.repo.FormRepository;
import santatecla.itinerarios.repo.ImageRepository;

@RepositoryRestController
@RequestMapping("forms")
public class FormController {
    private final FormRepository repository;
    private final ImageRepository imageRepository;

    public FormController(FormRepository repository, ImageRepository imageRepository) {
        this.repository = repository;
        this.imageRepository = imageRepository;
    }

    @PostMapping(value = "{form}/images")
    public ResponseEntity<Form> addImage(@Valid @PathVariable Form form, @RequestParam List<MultipartFile> multiparts)
            throws IOException {
        this.imageRepository
                .saveAll(multiparts.stream()
                        .filter(multipart -> multipart.getOriginalFilename() != null
                                && !"".equals(multipart.getOriginalFilename()) && multipart.getSize() > 0)
                        .map(multipart -> {
                            try {
                                return new Image(multipart.getOriginalFilename(), form, multipart.getBytes());
                            } catch (IOException e) {
                                return null;
                            }
                        }).collect(Collectors.toList()));
        return ResponseEntity.ok(this.repository.save(form));
    }

    @PostMapping // TODO: search if it's posible to map file to form
    public ResponseEntity<Form> addForm(@Valid @ModelAttribute Form form,
            @RequestParam("upload_image") List<MultipartFile> images) throws IOException {
        if (form.getId() == null)
            form = this.repository.save(form);
        this.addImage(form, images);
        return ResponseEntity.ok(form);
    }

    @PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<Form> postFile(@RequestBody @NotNull Form file) {
        return ResponseEntity.ok(this.repository.save(file));
    }
}
