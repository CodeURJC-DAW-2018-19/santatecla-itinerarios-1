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
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

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
    @NotNull
    private String title;

    private String description;

    @Lob
    private byte[] image;

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

    public void setImage(byte[] image) {
        this.image = image;
    }
}
