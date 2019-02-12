package santatecla.itinerarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.UnitRepository;

import java.util.List;
import java.util.Optional;

@Controller
public class MustacheController {
    private UnitRepository repository;

    @Autowired
    public MustacheController(UnitRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    public String index(Model model) {
        final List<Unit> units = this.repository.findAll();
        model.addAttribute("units", units);
        return "index";
    }

    @GetMapping("/{id}")
    public String index(Model model, @PathVariable Long id) {
        final List<Unit> units = this.repository.findAll();
        model.addAttribute("units", units);

        final Optional<Unit> unit = this.repository.findById(id);
        unit.ifPresent((value) -> model.addAttribute("unit", value));
        return "index";
    }
}