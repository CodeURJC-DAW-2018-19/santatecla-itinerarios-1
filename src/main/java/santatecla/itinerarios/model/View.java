package santatecla.itinerarios.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Entity
@Data
public class View extends Item {
    @ManyToMany(cascade = CascadeType.PERSIST)
    private Set<Form> forms;

    @NotNull
    @ManyToOne
    @JoinTable(name = "itinerary_items", joinColumns = { @JoinColumn(name = "item_id") }, inverseJoinColumns = {
            @JoinColumn(name = "itinerary_id") }, uniqueConstraints = {
                    @UniqueConstraint(columnNames = { "itinerary_id", "item_id" }) })
    private Itinerary itinerary;

    public View() {
        super(null);
    }

    public void addForm(Form form) {
        if (forms == null) {
            this.forms = new HashSet<>();
        }
        this.forms.add(form);
    }

    public void removeForm(Form form) {
        if (this.forms != null) {
            this.forms.remove(form);
        }
    }

    @JsonIgnore
    public Itinerary getItinerary() {
        return this.itinerary;
    }

    @JsonProperty
    public void setItinerary(Itinerary itinerary) {
        this.itinerary = itinerary;
    }
}
