package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
@Data
public class Itinerary {
    @Id
    private Long id;

    @Column
    private String title;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private Set<Itinerary> subItineraries;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private Set<View> views;

    @ManyToOne
    @JoinColumn
    private Unit unit;
}
