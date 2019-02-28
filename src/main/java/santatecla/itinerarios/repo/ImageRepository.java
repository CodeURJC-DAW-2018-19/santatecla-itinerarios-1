package santatecla.itinerarios.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import santatecla.itinerarios.model.Image;

import java.util.Optional;

@RepositoryRestResource
public interface ImageRepository extends JpaRepository<Image, Image.ImageId> {
    Optional<Image> findById_FilenameAndId_Form_Id(String filename, Long form_id);
}
