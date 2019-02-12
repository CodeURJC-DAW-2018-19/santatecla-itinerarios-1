package santatecla.itinerarios.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.model.Unit;

import java.util.List;

public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
    List<Itinerary> findAllByUnit(Unit unit);
}


