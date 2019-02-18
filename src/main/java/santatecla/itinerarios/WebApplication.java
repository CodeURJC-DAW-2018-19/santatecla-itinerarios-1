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
            Form form = new Form("Eventos", "bra bra bra", unit);
            View view = new View();
            view.addForm(form);
            Itinerary itinerary = new Itinerary("Resumen", unit);
            itinerary.addItem(view);
            unit.addItinerary(itinerary);
            unit.addForm(form);
            unitRepository.save(unit);

            Unit unit1 = new Unit("CERN");
            Form form1 = new Form("Logros", "description", unit1);
            View view1 = new View();
            view1.addForm(form1);
            Itinerary itinerary1 = new Itinerary("Introduccion", unit1);
            itinerary1.addItem(view1);
            unit1.addItinerary(itinerary1);
            unit1.addForm(form1);
            unitRepository.save(unit1);

            Unit unit2 = new Unit("Tim Berners Lee");
            Form form2 = new Form("Datos", "description", unit2);
            View view2 = new View();
            view2.addForm(form2);
            Itinerary itinerary2 = new Itinerary("Bibliografia", unit2);
            itinerary2.addItem(view2);
            unit2.addItinerary(itinerary2);
            unit2.addForm(form2);
            unitRepository.save(unit2);

            Unit unit3 = new Unit("Javascript");
            Form form3 = new Form("Cuándo", "description", unit3);
            Form form4 = new Form("Dónde", "description", unit3);
            Form form5 = new Form("Quién", "description", unit3);
            Form form6 = new Form("Por qué", "description", unit3);
            View view3 = new View();
            view3.addForm(form3);
            view3.addForm(form4);
            view3.addForm(form5);
            view3.addForm(form6);
            Itinerary itinerary3 = new Itinerary("Contexto", unit3);
            itinerary3.addItem(view3);
            unit3.addItinerary(itinerary3);
            unit3.addForm(form3);
            unit3.addForm(form4);
            unit3.addForm(form5);
            unit3.addForm(form6);
            unitRepository.save(unit3);

            // TODO: why i need to add later
            itinerary3.addItem(itinerary);
            itinerary3.addItem(itinerary1);
            itinerary3.addItem(itinerary2);
            unitRepository.save(unit3);
        };
    }
}

