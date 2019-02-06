package burgers;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
@Table(name="Burger_Order")
public class Order implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@ManyToOne
	private User user;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private long id;
	
	@Column(name="placedat")
	private Date placedAt;
	
	@NotBlank(message="Numele este obligatoriu")
	@Column(name="deliveryname")
	private String deliveryName;
	
	@NotBlank(message="Strada este obligatorie")
	@Column(name="deliverystreet")
	private String deliveryStreet;
	
	@NotBlank(message="Orașul este obligatoriu")
	@Column(name="deliverycity")
	private String deliveryCity;
	
	@NotBlank(message="Țara este obligatorie")
	@Column(name="deliverystate")
	private String deliveryState;
	
	@NotBlank(message="Codul poștal este obligatoriu")
	@Column(name="deliveryzip")
	private String deliveryZip;
	
	@NotBlank(message="Obligatoriu")
	@Column(name="ccnumber")
	private String ccNumber;
	
	@NotBlank(message="Obligatoriu")
	@Column(name="ccexpiration")
	private String ccExpiration;
	
	@NotBlank(message="Obligatoriu")
	private String ccCVV;
	
	@ManyToMany(targetEntity=Burger.class)
	private List<Burger> burgers;
	
	@PrePersist
	void placedAt() {
		this.placedAt = new Date();
	}
}
