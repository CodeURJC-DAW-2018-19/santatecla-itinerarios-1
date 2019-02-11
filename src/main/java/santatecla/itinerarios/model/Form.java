package santatecla.itinerarios.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Form {
    @Id
    @Column(length = 30)
    private String title;

    @Column
    private String description;
}
