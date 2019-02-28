package santatecla.itinerarios.service;

import org.springframework.stereotype.Service;
import santatecla.itinerarios.model.Image;
import santatecla.itinerarios.repo.ImageRepository;

import java.util.Optional;

@Service
public class ImageService {
    private ImageRepository repository;

    public ImageService(ImageRepository repository) {
        this.repository = repository;
    }

    public Optional<Image> findById(String id) {
        final int index = id.indexOf("_");
        Long formId = Long.parseLong(id.substring(0, index));
        String filename = id.substring(index + 1);
        return this.repository.findById_FilenameAndId_Form_Id(filename, formId);
    }
}
