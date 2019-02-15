package santatecla.itinerarios;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.model.User;
import santatecla.itinerarios.model.View;
import santatecla.itinerarios.repo.UnitRepository;
import santatecla.itinerarios.repo.UserRepository;

@SpringBootApplication
public class WebApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebApplication.class, args);
    }

    @Bean
    public CommandLineRunner addTestData(UnitRepository unitRepository, UserRepository userRepository) {
        return (args) -> {
            userRepository.deleteAll();
            final User user = new User("user", "pass");
            user.addRole("user");
            userRepository.save(user);
            final User admin = new User("admin", "pass");
            admin.addRole("admin");
            userRepository.save(admin);

            unitRepository.deleteAll();
            Unit unit = new Unit("Anio 1990");
            Form form = new Form("Eventos", "bra bra bra");
            View view = new View();
            view.addForm(form);
            Itinerary itinerary = new Itinerary("Resumen");
            itinerary.addItem(view);
            unit.addItinerary(itinerary);
            Form form1 = new Form("Prueba", "Por favor funciona");
            unit.addForm(form1);
            unitRepository.save(unit);
        };
    }
}

