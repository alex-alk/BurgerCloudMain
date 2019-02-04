package burgers.web.api.controllers;
/*
import javax.validation.Valid;

import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import burgers.User;
import burgers.data.OrderRepository;
import burgers.Order;

@RepositoryRestController
@RequestMapping("/comezi")
@SessionAttributes("order")
public class OrderController {
	
	private OrderRepository orderRepo;
	
	public OrderController(OrderRepository orderRepo) {
		this.orderRepo = orderRepo;
	}
	
	@GetMapping("/curent")
	public String orderForm() {
		return "orderForm";
	}
	
	@PostMapping
	public String processOrder(@Valid Order order, Errors errors,
							   SessionStatus sessionStatus, @AuthenticationPrincipal User user) {
		if(errors.hasErrors()) {
			return "orderForm";
		}
		order.setUser(user);
		orderRepo.save(order);
		sessionStatus.setComplete();
		return "redirect:/";
	}
}*/