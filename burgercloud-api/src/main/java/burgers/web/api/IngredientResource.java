package burgers.web.api;
import org.springframework.hateoas.ResourceSupport;
import org.springframework.hateoas.core.Relation;
import burgers.Ingredient;
import lombok.Getter;

@Relation(value="ingredient", collectionRelation = "ingredients")
public class IngredientResource extends ResourceSupport{
	
	@Getter
	private final String name;
	
	@Getter
	private final String type;
	
	public IngredientResource(Ingredient ingredient) {
		this.name = ingredient.getName();
		this.type = ingredient.getType();
	}
}
