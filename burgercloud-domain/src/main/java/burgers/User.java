package burgers;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@NoArgsConstructor(access=AccessLevel.PRIVATE, force=true)
@RequiredArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private final String username;
	@NotNull
	private final String password;
	@NotNull
	private final String fullname;
	@NotNull
	private final String street;
	@NotNull
	private final String city;
	@NotNull
	private final String state;
	@NotNull
	private final String zip;
	@NotNull
	private final String phone;
}