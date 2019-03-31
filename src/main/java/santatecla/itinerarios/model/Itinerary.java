package santatecla.itinerarios.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.PreRemove;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@EqualsAndHashCode(exclude = "unit")
@ToString(exclude = "unit")
@NoArgsConstructor
public class Itinerary extends Item {
    @Column(nullable = false)
    private String title;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(uniqueConstraints = { @UniqueConstraint(columnNames = { "itinerary_id", "items_id" }) })
    private List<Item> items;

    @ManyToOne
    @JoinColumn
    @JsonIgnore
    @NotNull
    private Unit unit;

    @PreRemove
    public void onRemove() {
        // skip cascade operation to itineraries
        if (this.items != null) {
            this.items.removeIf(item -> item instanceof Itinerary);
        }
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

    public void removeItem(Item item) {
        if (this.items != null) {
            this.items.remove(item);
        }
    }

    @Override
    public boolean getIsItinerary() {
        return true;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }
}
