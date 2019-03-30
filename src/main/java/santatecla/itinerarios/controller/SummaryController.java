package santatecla.itinerarios.controller;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.SummaryView;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.UnitRepository;

import java.util.List;

@RestController
@RequestMapping("/summary")
public class SummaryController {
    private UnitRepository repository;

    public SummaryController(UnitRepository repository) {
        this.repository = repository;
    }

    @JsonView(SummaryView.class)
    @GetMapping("units")
    public List<Unit> units() {
        return this.repository.findAll();
    }
}
