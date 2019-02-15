package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Form {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    public Form() {
    }

    public Form(String title, String description) {
        this.title = title;
        this.description = description;
    }
}
