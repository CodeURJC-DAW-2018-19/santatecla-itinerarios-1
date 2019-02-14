package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Form {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String description;

    public Form() {
    }

    public Form(String title, String description) {
        this.title = title;
        this.description = description;
    }
}
