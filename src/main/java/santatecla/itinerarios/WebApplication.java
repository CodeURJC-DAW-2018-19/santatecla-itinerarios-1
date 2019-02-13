package santatecla.itinerarios;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import santatecla.itinerarios.model.Form;
import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.model.View;
import santatecla.itinerarios.repo.ItineraryRepository;
import santatecla.itinerarios.repo.UnitRepository;

@SpringBootApplication
public class WebApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebApplication.class, args);
    }

    @Bean
    public CommandLineRunner addTestData(
            UnitRepository unitRepository,
            ItineraryRepository itineraryRepository) {
        return (args) -> {
            unitRepository.deleteAll();
            Unit unit = new Unit("Anio 1990");
            unitRepository.save(unit);
            Form form = new Form("Eventos", "bra bra bra");
            View view = new View();
            view.addForm(form);
            form.setUnit(unit);
            Itinerary itinerary = new Itinerary("Resumen");
            itinerary.addView(view);
            itineraryRepository.save(itinerary);
            unit.addItinerary(itinerary);
            Form form1 = new Form("Prueba","Por favor funciona");
            unit.addForm(form1);
            unitRepository.save(unit);
        };
    }
}

