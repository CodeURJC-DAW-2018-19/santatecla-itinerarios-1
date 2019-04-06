package santatecla.itinerarios.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Inheritance(strategy = InheritanceType.JOINED)
@NoArgsConstructor
public class Item {
    @Id
    @GeneratedValue
    private Long id;

    public Item(Long id) {
        this.id = id;
    }

    public boolean getIsItinerary() {
        // TODO: i don't line
        return false;
    }
}
