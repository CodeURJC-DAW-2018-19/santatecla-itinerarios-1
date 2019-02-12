package santatecla.itinerarios.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import santatecla.itinerarios.model.Itinerary;

public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
	
}


