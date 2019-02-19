package santatecla.itinerarios.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
public class View extends Item {
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Form> forms;

    public View(Itinerary itinerary) {
        super(itinerary);
    }

    public void addForm(Form form) {
        if (forms == null) {
            this.forms = new HashSet<>();
        }
        this.forms.add(form);
    }
}
