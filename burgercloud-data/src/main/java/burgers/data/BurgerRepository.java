package burgers.data;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import burgers.Burger;

@CrossOrigin(origins = "*")
public interface BurgerRepository extends PagingAndSortingRepository<Burger, Long>{

}
