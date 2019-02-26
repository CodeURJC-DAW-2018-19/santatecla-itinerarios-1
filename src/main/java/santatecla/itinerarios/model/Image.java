package santatecla.itinerarios.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@EqualsAndHashCode(exclude = "form")
public class Image {
    @Embeddable
    @NoArgsConstructor
    private static class ImageId implements Serializable {
        @Column(length = 64)
        private String filename;

        @ManyToOne
        private Form form;

        public ImageId(String filename, Form form) {
            this.filename = filename;
            this.form = form;
        }
    }

    @EmbeddedId
    private ImageId id;

    public Image(String filename, Form form, byte[] raw) {
        this.id = new ImageId(filename, form);
        this.raw = raw;
    }

    @Lob
    private byte[] raw;
}
