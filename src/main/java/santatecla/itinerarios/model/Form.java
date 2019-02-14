package santatecla.itinerarios.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
@EqualsAndHashCode(exclude = {"unit"})
public class Form {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String title;

    @Column
    private String description;

    @ManyToOne
    @JoinColumn
    private Unit unit;

    public Form() {
    }

    public Form(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }
}
