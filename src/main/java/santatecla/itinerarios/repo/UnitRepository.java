package santatecla.itinerarios.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import santatecla.itinerarios.model.Unit;

public interface UnitRepository extends JpaRepository<Unit, Long> {
}