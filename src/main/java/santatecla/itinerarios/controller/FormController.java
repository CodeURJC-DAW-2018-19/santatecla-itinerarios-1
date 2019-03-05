package santatecla.itinerarios.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
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

//@RestController
@Controller
@RequestMapping("forms")
public class FormController {
    private FormRepository repository;

    public FormController(FormRepository repository) {
        this.repository = repository;
    }

    @PostMapping // TODO: search if it's posible to map file to form
    public Form addForm(@Valid @ModelAttribute Form form, @RequestParam("upload_image") List<MultipartFile> files) throws IOException {


        form = this.repository.save(form);

        for(MultipartFile file: files){
           if(file != null){
               form.addImage(new Image(file.getOriginalFilename(), form, file.getBytes()));
           }
        }

        /*if (file != null) {

            form.addImage(new Image(file.getOriginalFilename(), form, file.getBytes()));
        }*/
        return this.repository.save(form);
    }
}
