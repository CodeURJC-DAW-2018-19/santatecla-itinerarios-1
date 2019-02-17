package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Itinerary extends Item {
    @Column(nullable = false)
    private String title;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Item> items;

    public Itinerary() {
    }

    public Itinerary(String title) {
        this.title = title;
    }

    public void addItem(Item item) {
        if (this.items == null) {
            this.items = new ArrayList<>();
        }
        this.items.add(item);
    }

    @Override
    public boolean getIsItinerary() {
        return true;
    }
}
