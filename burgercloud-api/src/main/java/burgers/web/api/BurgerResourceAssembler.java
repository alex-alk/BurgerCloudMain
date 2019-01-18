package burgers.web.api;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import burgers.Burger;

public class BurgerResourceAssembler extends ResourceAssemblerSupport<Burger, BurgerResource>{

	public BurgerResourceAssembler() {
		super(DesignBurgerController.class, BurgerResource.class);
	}
	
	@Override
	protected BurgerResource instantiateResource(Burger burger) {
		return new BurgerResource(burger);
	}
	
	@Override
	public BurgerResource toResource(Burger burger) {
		return createResourceWithId(burger.getId(), burger);
	}

}
