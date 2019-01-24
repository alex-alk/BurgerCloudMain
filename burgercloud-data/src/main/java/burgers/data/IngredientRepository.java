package burgers.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import burgers.Ingredient;

@CrossOrigin(origins = "*")
public interface IngredientRepository extends CrudRepository<Ingredient, String>{}
