package santatecla.itinerarios.component;

import org.springframework.data.rest.core.support.EntityLookupSupport;
import org.springframework.stereotype.Component;
import santatecla.itinerarios.model.Image;
import santatecla.itinerarios.service.ImageService;

import java.util.Optional;

@Component
public class ImageEntityLookup extends EntityLookupSupport<Image> {

    private final ImageService service;

    public ImageEntityLookup(ImageService service) {
        this.service = service;
    }

    @Override
    public Object getResourceIdentifier(Image entity) {
        return entity.getId().toString();
    }

    @Override
    public Optional<Image> lookupEntity(Object id) {
        return this.service.findById((String) id);
    }
}