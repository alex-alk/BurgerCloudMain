package burgers.web.api;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.Resources;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import burgers.Burger;
import burgers.data.BurgerRepository;
import org.springframework.http.HttpStatus;
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
	public Resources<BurgerResource> recentBurgers() {
		PageRequest page = PageRequest.of(0, 12, Sort.by("createdAt").descending());
		List<Burger> burgers = burgerRepo.findAll(page).getContent();
		List<BurgerResource> burgerResources = new BurgerResourceAssembler().toResources(burgers);
		Resources<BurgerResource> recentResources = new Resources<BurgerResource> (burgerResources);
		recentResources.add(
				ControllerLinkBuilder.linkTo(
						ControllerLinkBuilder.methodOn(DesignBurgerController.class).recentBurgers())
					.withRel("recents")
		);
		return recentResources;
	}

	@GetMapping("/{id}")
	public Burger burgerById(@PathVariable("id") Long id) {
		Optional<Burger> optBurger = burgerRepo.findById(id);
		if (optBurger.isPresent()) {
			return optBurger.get();
		}
		return null;
	}
	
	@PostMapping(consumes="application/json")
	@ResponseStatus(HttpStatus.CREATED)
	public Burger postBurger(@RequestBody Burger burger) {
		return burgerRepo.save(burger);
	}
}