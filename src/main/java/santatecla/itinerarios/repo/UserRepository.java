package santatecla.itinerarios.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import santatecla.itinerarios.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUsername(String username);

    boolean existsByUsername(String username);
}
