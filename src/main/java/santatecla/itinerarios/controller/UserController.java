package santatecla.itinerarios.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import santatecla.itinerarios.model.User;
import santatecla.itinerarios.repo.UserRepository;

import javax.validation.Valid;

@Controller
public class UserController {
    private UserRepository repo;

    public UserController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/signUp")
    public String signUp(@Valid @ModelAttribute("user") User user) {
        this.repo.save(user);
        return "redirect:/login";
    }
}
