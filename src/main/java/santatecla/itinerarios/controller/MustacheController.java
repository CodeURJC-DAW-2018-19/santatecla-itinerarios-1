package santatecla.itinerarios.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.FormRepository;
import santatecla.itinerarios.repo.ItineraryRepository;
import santatecla.itinerarios.repo.UnitRepository;

import java.util.List;
import java.util.Optional;

@Controller
public class MustacheController {
    private UnitRepository unitRepository;
    private ItineraryRepository itineraryRepository;
    private FormRepository formRepository;

    public MustacheController(UnitRepository unitRepository, ItineraryRepository itineraryRepository, FormRepository formRepository) {
        this.unitRepository = unitRepository;
        this.itineraryRepository = itineraryRepository;
        this.formRepository = formRepository;
    }

    @GetMapping("/")
    public String index() {
        return "redirect:/home";
    }

    @GetMapping("/home")
    public String home(Model model) {
        final List<Unit> units = this.unitRepository.findAll();
        model.addAttribute("units", units);
        model.addAttribute("isHome", true);
        return "index";
    }

    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("isLogin", true);
        return "index";
    }

    @GetMapping("/login_error")
    public String loginError(Model model) {
        //return "login_error";
        model.addAttribute("loginErrorMsg", "true");
        model.addAttribute("isLogin", true);
        return "index";
    }

    @GetMapping("/signUp")
    public String SignUp(Model model) {
        model.addAttribute("isSignUp", true);
        return "index";
    }

    @GetMapping("/home/{unit_id}")
    public String home(Model model, @PathVariable Long unit_id, @PageableDefault(value = 5) Pageable pageable) {
        final Optional<Unit> unit = this.unitRepository.findById(unit_id);
        unit.ifPresent((value) -> model.addAttribute("unit", value));
        final Page<Form> forms = this.formRepository.findAllByUnit_Id(unit_id, pageable);
        model.addAttribute("unit_forms", forms);
        if (pageable.getPageNumber() > 0) {
            model.addAttribute("prev_page", pageable.getPageNumber() - 1);
        }
        if (pageable.getPageNumber() < forms.getTotalPages() - 1) {
            model.addAttribute("next_page", pageable.getPageNumber() + 1);
        }
        return home(model);
    }

    @GetMapping("/home/{unit_id}/{itinerary_id}")
    public String home(Model model, @PathVariable Long unit_id, @PathVariable Long itinerary_id, @PageableDefault(value = 5) Pageable page) {
        final Optional<Itinerary> itinerary = this.itineraryRepository.findById(itinerary_id);
        itinerary.ifPresent((value) -> model.addAttribute("itinerary", value));

        return home(model, unit_id, page);
    }

    @GetMapping("/unit_option/{unit_id}")
    public String unitForm(Model model, @PathVariable Long unit_id) {
        final Optional<Unit> unit = this.unitRepository.findById(unit_id);
        unit.ifPresent(value -> model.addAttribute("dropdown_unit", value));
        return "formsDropdown";
    }
}