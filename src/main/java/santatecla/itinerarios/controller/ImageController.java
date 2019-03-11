package santatecla.itinerarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.model.Image;
import santatecla.itinerarios.service.ImageService;

import javax.persistence.EntityNotFoundException;

@RepositoryRestController
public class ImageController {
    private final ImageService service;

    @Autowired
    public ImageController(ImageService service) {
        this.service = service;
    }

    @GetMapping(value = "/images/{id:.+}")
    public ResponseEntity<byte[]> get(@PathVariable String id) {
        final Image image = this.service.findById(id).orElseThrow(EntityNotFoundException::new);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + image.getId().getFilename());
        headers.add(HttpHeaders.CONTENT_TYPE, MediaType.IMAGE_PNG_VALUE);
        return ResponseEntity.ok().headers(headers).body(image.getRaw());
    }

    @GetMapping(value = "/forms/{form}/images/{filename:.+}")
    public ResponseEntity<byte[]> get(@PathVariable Form form, @PathVariable String filename) {
        return this.get(new Image.ImageId(filename, form).toString());
    }
}