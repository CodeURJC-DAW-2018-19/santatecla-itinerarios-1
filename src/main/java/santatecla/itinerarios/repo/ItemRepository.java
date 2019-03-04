package santatecla.itinerarios.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import santatecla.itinerarios.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
