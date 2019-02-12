package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import java.util.Set;

@Entity
@Data
public class View {
    @Id
    private Long id;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable
    private Set<Form> forms;
}
