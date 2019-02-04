package burgers.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import burgers.Order;

@CrossOrigin(origins = "*")
public interface OrderRepository extends CrudRepository<Order, Long>{}
