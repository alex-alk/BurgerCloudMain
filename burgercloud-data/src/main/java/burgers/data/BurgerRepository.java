package burgers.data;

import org.springframework.data.repository.PagingAndSortingRepository;

import burgers.Burger;

public interface BurgerRepository extends PagingAndSortingRepository<Burger, Long>{}
