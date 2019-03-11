package santatecla.itinerarios.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.web.PageableDefault;
import santatecla.itinerarios.model.Form;

import java.util.Set;

public interface FormRepository extends JpaRepository<Form, Long> {
    Page<Form> findAllByUnit_Id(Long id, @PageableDefault Pageable page);

    interface Basic {
        Long getId();

        String getTitle();
    }

    @RestResource(exported = false)
    Set<Basic> findAllByUnit_Id(Long id);
}
