package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Unit {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String title;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private Set<Itinerary> itineraries;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private Set<Form> forms;

    public Unit(String title) {
        this.title = title;
    }

    public Unit() {
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
}
