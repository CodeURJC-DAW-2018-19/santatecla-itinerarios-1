package santatecla.itinerarios.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
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
                .antMatchers("/login", "/login_error", "/logout", "/signUp", "/units", "/", "/error").permitAll()
                .antMatchers("/units/**").authenticated()
                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .defaultSuccessUrl("/units", true)
                .failureUrl("/login_error")
                .and()
                .logout().logoutUrl("/logout").logoutSuccessUrl("/units").permitAll();

        http
                .httpBasic()
                .and().authorizeRequests()
                .antMatchers("/api", "/api/units", "/summary").permitAll()
                .antMatchers(HttpMethod.POST, "/api/users").permitAll()
                .antMatchers(HttpMethod.POST, "/api/**").hasRole("admin")
                .antMatchers(HttpMethod.DELETE, "/api/**").hasRole("admin")
                .antMatchers(HttpMethod.PUT, "/api/**").hasRole("admin")
                .antMatchers(HttpMethod.PATCH, "/api/**").hasRole("admin")
                .antMatchers("/api/**").hasAnyRole("user", "admin")
                .anyRequest().authenticated();
        // TODO: .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.requiresChannel().anyRequest().requiresSecure();

        http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
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