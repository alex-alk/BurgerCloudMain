package burgers.web.api;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import burgers.Ingredient;
import burgers.web.api.controllers.IngredientController;

public class IngredientResourceAssembler extends ResourceAssemblerSupport<Ingredient, IngredientResource>{

	public IngredientResourceAssembler() {
		super(IngredientController.class, IngredientResource.class);
	}
	
	@Override
	protected IngredientResource instantiateResource(Ingredient ingredient) {
		return new IngredientResource(ingredient);
	}
	
	@Override
	public IngredientResource toResource(Ingredient ingredient) {
		return createResourceWithId(ingredient.getId(), ingredient);
	}

}
