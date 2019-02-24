package santatecla.itinerarios.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import santatecla.itinerarios.model.User;
import santatecla.itinerarios.repo.UserRepository;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Controller
public class UserController {
    private UserRepository repo;

    public UserController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/signUp")
    public String signUp(@Valid @NotNull @ModelAttribute("user") User user) {
        if (this.repo.existsByUsername(user.getUsername())) {
            return "redirect:/signUp";
        } else {
            this.repo.save(user);
            return "redirect:/login";
        }
    }
}
