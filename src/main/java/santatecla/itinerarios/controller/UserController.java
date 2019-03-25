package santatecla.itinerarios.controller;

import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import santatecla.itinerarios.model.User;
import santatecla.itinerarios.repo.UserRepository;
import santatecla.itinerarios.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Controller
@BasePathAwareController
@RequestMapping(value = "/users")
public class UserController {
    private UserRepository repo;
    private UserService userService;

    public UserController(UserRepository repo, UserService userService) {
        this.repo = repo;
        this.userService = userService;
    }

    @PostMapping
    public String signUp(@Valid @NotNull @ModelAttribute("user") User user) {
        if (this.repo.existsByUsername(user.getUsername())) {
            return "redirect:/signUp";
        } else {
            this.repo.save(user);
            return "redirect:/login";
        }
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/me")
    @ResponseBody
    public User me() {
        return this.userService.getCurrentUser();
    }
}
