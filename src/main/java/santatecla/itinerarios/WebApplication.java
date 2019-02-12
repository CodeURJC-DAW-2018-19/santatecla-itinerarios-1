package santatecla.itinerarios;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import santatecla.itinerarios.model.Itinerary;
import santatecla.itinerarios.model.Unit;
import santatecla.itinerarios.repo.ItineraryRepository;
import santatecla.itinerarios.repo.UnitRepository;

@SpringBootApplication
public class WebApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebApplication.class, args);
    }

    @Bean
    public CommandLineRunner addTestData(UnitRepository unitRepository, ItineraryRepository itineraryRepository) {
        return (args) -> {
            Unit unit = new Unit(1L, "Python");
            unitRepository.save(unit);
            Itinerary itinerary1 = new Itinerary(1L, "Hola Mundo", unit);
            itineraryRepository.save(itinerary1);
            Itinerary itinerary2 = new Itinerary(2L, "Adios", unit);
            itineraryRepository.save(itinerary2);
            unitRepository.save(new Unit(2L, "Adios"));
        };
    }
}

