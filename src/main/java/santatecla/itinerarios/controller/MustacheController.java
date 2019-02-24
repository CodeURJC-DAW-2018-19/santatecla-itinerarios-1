package santatecla.itinerarios.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Set;

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
        return "redirect:/units";
    }

    @GetMapping("/units")
    public String index(Model model) {
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

    @GetMapping("/units/{id}")
    public String index(Model model, @PathVariable Long id) {
        final Unit unit = this.unitRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(Unit.class.getName() + " not found with id " + id));
        model.addAttribute("unit", unit);
        this.findAllByUnit_Id(model, id, PageRequest.of(0, 10));
        return index(model);
    }

    @GetMapping("/units/{unit_id}/forms")
    public String findAllByUnit_Id(Model model, @PathVariable Long unit_id, @PageableDefault Pageable pageable) {
        final Page<Form> forms = this.formRepository.findAllByUnit_Id(unit_id, pageable);
        model.addAttribute("unit_forms", forms);
        if (pageable.getPageNumber() < forms.getTotalPages() - 1) {
            model.addAttribute("next_page", pageable.getPageNumber() + 1);
        }
        return "forms_list";
    }

    @GetMapping("/units/{unit_id}/{itinerary_id}")
    public String index(Model model, @PathVariable Long unit_id, @PathVariable Long itinerary_id) {
        final Itinerary itinerary = this.itineraryRepository.findById(itinerary_id).orElseThrow(() -> new EntityNotFoundException(Itinerary.class.getName() + " not found with id " + itinerary_id));
        model.addAttribute("itinerary", itinerary);

        return index(model, unit_id);
    }

    @GetMapping("/dropdown/forms/{unit_id}")
    public String unitForms(Model model, @PathVariable Long unit_id) {
        final Set<FormRepository.Basic> forms = this.formRepository.findAllByUnit_Id(unit_id);
        model.addAttribute("dropdown_forms", forms);
        return "formsDropdown";
    }

    @GetMapping("/dropdown/itineraries/{unit_id}")
    public String unitItineraries(Model model, @PathVariable Long unit_id) {
        final Set<ItineraryRepository.Basic> itineraries = this.itineraryRepository.findAllByUnit_Id(unit_id);
        model.addAttribute("dropdown_itineraries", itineraries);
        model.addAttribute("title", "Buscar..");
        return "itinerariesDropdown";
    }
}