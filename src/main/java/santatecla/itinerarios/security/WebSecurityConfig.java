package santatecla.itinerarios.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import santatecla.itinerarios.service.UserService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private UserService userService;

    public WebSecurityConfig(UserService userService) {
        this.userService = userService;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/login", "/login_error", "/logout", "/signUp", "/forms").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .defaultSuccessUrl("/home", true)
                .failureUrl("/login_error")
                .and()
                .logout().logoutUrl("/logout").logoutSuccessUrl("/").permitAll();

        http.requiresChannel().anyRequest().requiresSecure();
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers("/assets/**");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder builder) throws Exception {
        builder.userDetailsService(this.userService);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // TODO: update Password Encoder
        return NoOpPasswordEncoder.getInstance();
    }
}