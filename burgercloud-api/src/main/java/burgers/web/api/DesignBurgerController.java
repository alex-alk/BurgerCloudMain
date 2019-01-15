package burgers.web.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.hateoas.EntityLinks;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import burgers.Burger;
import burgers.data.BurgerRepository;

@RestController
@RequestMapping(path="/design", produces="application/json")
@CrossOrigin(origins="*")
public class DesignBurgerController {
	
	private BurgerRepository burgerRepo;
	
	@Autowired
	EntityLinks entityLinks;
	
	public DesignBurgerController(BurgerRepository burgerRepo) {
		this.burgerRepo = burgerRepo;
	}
	@GetMapping("/recent")
	public Iterable<Burger> recentBurgers() {
		PageRequest page = PageRequest.of(0, 12, Sort.by("createdAt").descending());
		return burgerRepo.findAll(page).getContent();
	}
	/*---------------------------------------------
	@GetMapping("/{id}")
	public Burger tacoById(@PathVariable("id") Long id) {
		Optional<Burger> optTaco = burgerRepo.findById(id);
		if (optTaco.isPresent()) {
			return optTaco.get();
		}
		return null;
	}
	------------------------------------------------*/
}