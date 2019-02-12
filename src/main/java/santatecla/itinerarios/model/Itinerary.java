package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
public class Itinerary {
    @Id
    private Long id;

    @ManyToOne
    @JoinColumn
    private Unit unit;
}
