package santatecla.itinerarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.UnitRepository;

import java.util.List;

@Controller
public class MustacheController {
    private UnitRepository repository;

    @Autowired
    public MustacheController(UnitRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    public String index(Model model) {
        final List<Unit> forms = this.repository.findAll();
        model.addAttribute("units", forms);
        return "index";
    }
}