package burgers;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@NoArgsConstructor(access=AccessLevel.PRIVATE, force=true)
@Entity
public class Ingredient {
	@Id
	@Column(name="id")
	private final String id;
	private final String name;
	@Enumerated(EnumType.STRING)
	private final Type type;
	
	public static enum Type{
		WRAP, PROTEIN, VEGGIES, CHEESE, SAUCE
	}
}
