package santatecla.itinerarios.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@EqualsAndHashCode(exclude = {"unit", "images"})
@ToString(exclude = {"unit", "images"})
@NoArgsConstructor
public class Form {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    @NotNull
    private String title;

    private String description;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "id.form")
    private Set<Image> images;

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

    public void addImage(Image image) {
        if (this.images == null) {
            this.images = new HashSet<>();
        }
        this.images.add(image);
    }

    public Long getId() {
        return id;
    }
}
