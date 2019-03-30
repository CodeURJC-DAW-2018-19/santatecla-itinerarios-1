package santatecla.itinerarios.model;

import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Item {
    @JsonView(SummaryView.Itinerary.class)
    @Id
    @GeneratedValue
    private Long id;
    
    public boolean getIsItinerary() {
        // TODO: i don't line
        return false;
    }
}
