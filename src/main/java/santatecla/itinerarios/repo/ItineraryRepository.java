package santatecla.itinerarios.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import santatecla.itinerarios.model.Itinerary;

import java.util.Set;

public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
    interface Basic {
        Long getId();

        String getTitle();
    }

    Set<Basic> findAllByUnit_Id(Long id);
}