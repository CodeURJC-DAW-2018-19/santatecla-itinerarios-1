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

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

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

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "itinerary_items", joinColumns = {
            @JoinColumn(name = "itinerary_id", nullable = false) }, inverseJoinColumns = {
                    @JoinColumn(name = "item_id", nullable = false) }, uniqueConstraints = {
                            @UniqueConstraint(columnNames = { "itinerary_id", "item_id" }) })
    private List<Item> items; // TODO: composite primary key

    @ManyToOne
    @JoinColumn
    @NotNull
    private Unit unit;

    @PreRemove
    public void onRemove() {
        // skip cascade operation to itineraries
        if (this.items != null) {
            this.items.removeIf(item -> item instanceof Itinerary);
        }
    }

    @JsonCreator
    public Itinerary(Long itinerary) {
        super(itinerary);
    }

    public Itinerary(String title) {
        super(null);
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

    @JsonIgnore
    public Unit getUnit() {
        return this.unit;
    }

    @JsonProperty
    public void setUnit(Unit unit) {
        this.unit = unit;
    }
}
