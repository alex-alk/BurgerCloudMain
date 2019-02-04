package burgers.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import burgers.Burger;
import burgers.User;

public interface UserRepository extends CrudRepository<User, Long> {
	User findByUsernameAndPassword(String username, String password);
}
