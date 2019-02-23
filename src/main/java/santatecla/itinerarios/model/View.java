package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class View extends Item {
    @ManyToMany(cascade = CascadeType.PERSIST)
    private Set<Form> forms;

    public void addForm(Form form) {
        if (forms == null) {
            this.forms = new HashSet<>();
        }
        this.forms.add(form);
    }
}
