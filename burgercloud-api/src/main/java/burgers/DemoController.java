package burgers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins="*")
public class DemoController {
	@GetMapping("/design/recenttest")
	public String index() {
		return "{\"message\": \"Hello, World!\"}";
	}
}
