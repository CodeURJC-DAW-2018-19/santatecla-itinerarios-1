package santatecla.itinerarios.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Unit {
    @Id
    @GeneratedValue
    private Long id; //  TODO: change id to title

    @Column(nullable = false)
    private String title;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "unit")
    private Set<Itinerary> itineraries;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "unit")
    private Set<Form> forms;

    public Unit(String title) {
        this.title = title;
    }

    public void addItinerary(Itinerary itinerary) {
        if (this.itineraries == null) {
            this.itineraries = new HashSet<>();
        }
        this.itineraries.add(itinerary);
    }

    public void addForm(Form form) {
        if (this.forms == null) {
            this.forms = new HashSet<>();
        }
        this.forms.add(form);
    }

    @PrePersist
    public void populateFormsAndItineraries() {
        if (this.forms != null) {
            for (Form form : this.forms) {
                form.setUnit(this);
            }
        }
        if (this.itineraries != null) {
            for (Itinerary itinerary : this.itineraries) {
                itinerary.setUnit(this);
            }
        }
    }
}
