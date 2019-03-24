package santatecla.itinerarios.model;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "summary", types = Form.class)
public interface FormSummary {
    String getTitle();
}