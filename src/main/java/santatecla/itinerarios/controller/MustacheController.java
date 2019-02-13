package santatecla.itinerarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.ItineraryRepository;
import santatecla.itinerarios.repo.UnitRepository;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MustacheController {
	private UnitRepository unitRepository;
	private ItineraryRepository itineraryRepository;

	@Autowired
	public MustacheController(UnitRepository unitRepository, ItineraryRepository itineraryRepository) {
		this.unitRepository = unitRepository;
		this.itineraryRepository = itineraryRepository;
	}

	@GetMapping("/")
	public String index(Model model) {
		final List<Unit> units = this.unitRepository.findAll();
		model.addAttribute("units", units);
		return "index";
	}

	@GetMapping("/login")
	public String login(Model model, HttpServletRequest request) {

		CsrfToken token = (CsrfToken) request.getAttribute("_csrf");
		model.addAttribute("token", token.getToken());

		return "login";
	}

	/*@GetMapping("/admin")
	public String home(Model model, HttpServletRequest request) {

		model.addAttribute("admin", request.isUserInRole("ADMIN"));
		return "home";
	} */

	@GetMapping("/{unit_id}")
	public String index(Model model, @PathVariable Long unit_id) {
		final Optional<Unit> unit = this.unitRepository.findById(unit_id);
		unit.ifPresent((value) -> {
			model.addAttribute("unit", value);
		});

		return index(model);
	}

	@GetMapping("/{unit_id}/{itinerary_id}")
	public String index(Model model, @PathVariable Long unit_id, @PathVariable Long itinerary_id) {
		final Optional<Itinerary> itinerary = this.itineraryRepository.findById(itinerary_id);
		itinerary.ifPresent((value) -> model.addAttribute("itinerary", value));
		return index(model, unit_id);
	}
}