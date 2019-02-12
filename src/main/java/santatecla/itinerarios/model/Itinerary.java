package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Itinerary {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String title;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private Set<Itinerary> subItineraries;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private Set<View> views;

    public Itinerary() {
    }

    public Itinerary(String title) {
        this.title = title;
    }

    public void addView(View view) {
        if (this.views == null) {
            this.views = new HashSet<>();
        }
        this.views.add(view);
    }
}
