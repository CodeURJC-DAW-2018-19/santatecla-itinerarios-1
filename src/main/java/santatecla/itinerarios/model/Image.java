package santatecla.itinerarios.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
@EqualsAndHashCode(exclude = "raw")
@ToString(exclude = "raw")
public class Image {
    @Embeddable
    @NoArgsConstructor
    @Data
    public static class ImageId implements Serializable {
        @Column(length = 64)
        private String filename;

        @ManyToOne
        @JsonBackReference
        private Form form;

        public ImageId(String filename, Form form) {
            this.filename = filename;
            this.form = form;
        }

        public String getFilename() {
            return filename;
        }

        @Override
        public String toString() {
            return this.form.getId() + "_" + filename;
        }
    }

    @EmbeddedId
    private ImageId id;

    public Image(String filename, Form form, byte[] raw) {
        this.id = new ImageId(filename, form);
        this.raw = raw;
    }

    @Lob
    @JsonIgnore
    private byte[] raw;

    public ImageId getId() {
        return id;
    }

    public byte[] getRaw() {
        return raw;
    }
}
