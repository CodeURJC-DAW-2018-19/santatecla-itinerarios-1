package santatecla.itinerarios.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
public class User {
    @Id
    @Column(length = 64)
    private String username;

    @Column(nullable = false)
    @JsonIgnore
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> roles;

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Set<String> getRoles() {
        return roles;
    }


    public void addRole(String role) {
        if (this.roles == null) {
            this.roles = new HashSet<>();
        }
        this.roles.add(role);
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
