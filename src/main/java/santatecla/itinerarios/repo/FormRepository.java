package santatecla.itinerarios.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import santatecla.itinerarios.model.Form;

public interface FormRepository extends JpaRepository<Form, Long> {
}
