package santatecla.itinerarios.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// Public pages
		http.authorizeRequests().antMatchers("/").permitAll();
		http.authorizeRequests().antMatchers("/login").permitAll();
		// http.authorizeRequests().antMatchers("/loginerror").permitAll();
		// http.authorizeRequests().antMatchers("/logout").permitAll();
		// Private pages (all other pages)
		http.authorizeRequests().anyRequest().authenticated();
		// Login form
		http.formLogin().loginPage("/login");
		http.formLogin().usernameParameter("username");
		http.formLogin().passwordParameter("password");
		http.formLogin().defaultSuccessUrl("/index");
		// http.formLogin().failureUrl("/loginerror");
		// Logout
// http.logout().logoutUrl("/logout");
		// http.logout().logoutSuccessUrl("/");

		// Disable CSRF at the moment
		http.csrf().disable();
		
		//Lets configure the pages that can see each kind of user
		// Public pages

		 // Private pages (all other pages)
		 http.authorizeRequests().antMatchers("/home").hasAnyRole("USER");
		 http.authorizeRequests().antMatchers("/admin").hasAnyRole("ADMIN");
		 // Login form

		 // Logout

		 //Allow resources with https
		 http.authorizeRequests().antMatchers("/resources/**").permitAll().anyRequest().permitAll();

	}
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// Users, one with user privileges and another one like admin
		auth.inMemoryAuthentication().withUser("username").password("password").roles("USER");
		auth.inMemoryAuthentication().withUser("admin").password("adminpass").roles("USER", "ADMIN");
	}

}