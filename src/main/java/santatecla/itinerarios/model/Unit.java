package santatecla.itinerarios.model;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
public class Unit {
    @JsonView(SummaryView.Unit.class)
    @Id
    @GeneratedValue
    private Long id;

    @JsonView(SummaryView.Unit.class)
    @Column(nullable = false)
    private String title;

    @JsonView(SummaryView.Unit.class)
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
