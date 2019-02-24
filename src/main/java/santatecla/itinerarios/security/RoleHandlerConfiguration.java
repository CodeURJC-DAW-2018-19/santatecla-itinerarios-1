package santatecla.itinerarios.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Configuration
public class RoleHandlerConfiguration implements WebMvcConfigurer {
    private static class RoleHandlerInterceptor extends HandlerInterceptorAdapter {

        @Override
        public void postHandle(final HttpServletRequest request,
                               final HttpServletResponse response, final Object handler,
                               final ModelAndView modelAndView) {
            if (request.getUserPrincipal() != null && modelAndView != null) {
                modelAndView.addObject("isAdmin", request.isUserInRole("admin"));
            }
        }
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new RoleHandlerInterceptor());
    }
}
