package santatecla.itinerarios.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
@EqualsAndHashCode(exclude = {"unit"})
@ToString(exclude = {"unit"})
@NoArgsConstructor
public class Form {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    @ManyToOne
    @JoinColumn(nullable = false)
    @JsonIgnore
    private Unit unit;

    public Form(String title, String description, Unit unit) {
        this.title = title;
        this.description = description;
        this.unit = unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }
}
