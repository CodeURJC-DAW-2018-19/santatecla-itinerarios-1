package santatecla.itinerarios.controller;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.User;
import santatecla.itinerarios.repo.UserRepository;

import javax.validation.Valid;

@RestController
public class UserController {
    private UserRepository repo;

    public UserController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/signUp")
    public String signUp(@Valid @RequestBody User user) {
        this.repo.save(user);
        return "login";
    }
}
