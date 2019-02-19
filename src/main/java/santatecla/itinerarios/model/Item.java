package santatecla.itinerarios.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@NoArgsConstructor
public class Item {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    @JsonIgnore
    private Itinerary itinerary;

    public Item(Itinerary itinerary) {
        this.itinerary = itinerary;
    }

    public boolean getIsItinerary() {
        // TODO: i don't line
        return false;
    }
}
