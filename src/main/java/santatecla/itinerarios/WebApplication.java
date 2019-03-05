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
            Itinerary itinerary = new Itinerary("Resumen");
            View view = new View();
            view.addForm(form);
            itinerary.addItem(view);
            unit.addItinerary(itinerary);
            unit.addForm(form);
            unitRepository.save(unit);

            Unit unit1 = new Unit("CERN");
            Form form1 = new Form("Logros", "description");
            Itinerary itinerary1 = new Itinerary("Introduccion");
            View view1 = new View();
            view1.addForm(form1);
            itinerary1.addItem(view1);
            unit1.addItinerary(itinerary1);
            unit1.addForm(form1);
            unitRepository.save(unit1);

            Unit unit2 = new Unit("Tim Berners Lee");
            Form form2 = new Form("Datos", "description");
            Itinerary itinerary2 = new Itinerary("Bibliografia");
            View view2 = new View();
            view2.addForm(form2);
            itinerary2.addItem(view2);
            unit2.addItinerary(itinerary2);
            unit2.addForm(form2);
            unitRepository.save(unit2);

            Unit unit3 = new Unit("Javascript");
            Form form3 = new Form("Cuándo", "description");
            Form form4 = new Form("Dónde", "description");
            Form form5 = new Form("Quién", "description");
            Form form6 = new Form("Por qué", "description");
            Form form7 = new Form("7", "description");
            Form form8 = new Form("8", "description");
            Form form9 = new Form("9", "description");
            Form form10 = new Form("10", "description");
            Form form11 = new Form("11", "description");
            Form form12 = new Form("12", "description");
            Form form13 = new Form("13", "description");
            Form form14 = new Form("14", "description");
            Form form15 = new Form("15", "description");
            Itinerary itinerary3 = new Itinerary("Contexto");
            View view3 = new View();
            view3.addForm(form3);
            view3.addForm(form4);
            view3.addForm(form5);
            view3.addForm(form6);
            itinerary3.addItem(view3);
            unit3.addItinerary(itinerary3);
            unit3.addForm(form3);
            unit3.addForm(form4);
            unit3.addForm(form5);
            unit3.addForm(form6);
            unit3.addForm(form7);
            unit3.addForm(form8);
            unit3.addForm(form9);
            unit3.addForm(form10);
            unit3.addForm(form11);
            unit3.addForm(form12);
            unit3.addForm(form13);
            unit3.addForm(form14);
            unit3.addForm(form15);
            unitRepository.save(unit3);

            // TODO: why i need to add later
            itinerary3.addItem(itinerary);
            itinerary3.addItem(itinerary1);
            itinerary3.addItem(itinerary2);
            unitRepository.save(unit3);
        };
    }
}

