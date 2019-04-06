package santatecla.itinerarios.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AngularController {
    @GetMapping("/app/{path:[^\\.]+}/**")
    public String forwardSPA() {
        return "forward:/app/index.html";
    }

    @GetMapping("app")
    public String index() {
        return "forward:/app/index.html";
    }
}
