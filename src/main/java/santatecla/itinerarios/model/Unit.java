package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
@Data
public class Unit {
    @Id
    @Column(length = 30)
    private String title;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private Set<Itinerary> itineraries;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private Set<Form> forms;
}
