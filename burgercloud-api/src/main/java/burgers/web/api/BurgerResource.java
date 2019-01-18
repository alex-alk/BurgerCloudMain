package burgers.web.api;

import java.util.Date;
import java.util.List;
import org.springframework.hateoas.ResourceSupport;
import burgers.Burger;
import lombok.Getter;

public class BurgerResource extends ResourceSupport{
	
	private static final IngredientResourceAssembler ingredientAssembler = new IngredientResourceAssembler();
	
	@Getter
	private final String name;
	
	@Getter
	private final Date createdAt;
	
	@Getter
	private final List<IngredientResource> ingredients;
	
	public BurgerResource(Burger burger) {
		this.name = burger.getName();
		this.createdAt = burger.getCreatedAt();
		this.ingredients = ingredientAssembler.toResources(burger.getIngredients());
	}
}
