package burgers.web.api.controllers;
/*
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.PagedResources;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.hateoas.Resources;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import burgers.Burger;
import burgers.data.BurgerRepository;
import burgers.web.api.BurgerResource;
import burgers.web.api.BurgerResourceAssembler;

@RepositoryRestController()
@RequestMapping(path="burgers/my/{userId}")
@CrossOrigin(origins = "*")
public class MyBurgersController {
	
	private BurgerRepository burgerRepo;
	
	public MyBurgersController(BurgerRepository burgerRepo) {
		this.burgerRepo = burgerRepo;
	}
	
	@ResponseBody
	@GetMapping(produces="application/hal+json")
	public Resources<BurgerResource> recentBurgers(@PathVariable(value="userId") String id){
		List<Burger> burgers = burgerRepo.findByUsersId(Long.parseLong(id));
		List<BurgerResource> burgerResources = new BurgerResourceAssembler().toResources(burgers);
		Resources<BurgerResource> recentResources = new Resources<BurgerResource> (burgerResources);
		return recentResources;
	}
	
	@Bean
	public ResourceProcessor<PagedResources<Resource<Burger>>> myBurgerProcessor(EntityLinks links){
		return new ResourceProcessor<PagedResources<Resource<Burger>>>() {
			@Override
			public PagedResources<Resource<Burger>> process(PagedResources<Resource<Burger>> resource){
				resource.add(links.linkFor(Burger.class).slash("my").slash("userId").withRel("burgers"));
				return resource;
			}
		};
	}
}*/
