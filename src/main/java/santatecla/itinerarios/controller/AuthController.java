package santatecla.itinerarios.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import santatecla.itinerarios.model.User;
import santatecla.itinerarios.service.UserService;

@RestController
public class AuthController {
    private UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/auth")
    public User auth() {
        return this.userService.getCurrentUser();
    }
}
