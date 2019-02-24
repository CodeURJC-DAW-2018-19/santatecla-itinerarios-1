package santatecla.itinerarios.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;

@Controller
public class CustomErrorController implements ErrorController {
    private static final String PATH = "/error";

    @RequestMapping(PATH)
    public String handleError(Model model, HttpServletResponse response) {
        Integer status = response.getStatus();
        final HttpStatus httpStatus = HttpStatus.valueOf(status);
        model.addAttribute("status", httpStatus.toString());
        model.addAttribute("isError", true);
        response.setStatus(status);
        return "index";
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }
}
