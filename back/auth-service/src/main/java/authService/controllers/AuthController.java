package authService.controllers;

import authService.models.AuthRequest;
import authService.services.JwtTokenService;
import authService.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final JwtTokenService jwtTokenService;
    private final UserService userService;

    public AuthController(JwtTokenService jwtTokenService, UserService userService) {
        this.jwtTokenService = jwtTokenService;
        this.userService = userService;
    }

    @PostMapping("/login")
    public String login(@RequestBody AuthRequest request) throws Exception {
        return jwtTokenService.generateToken(request.getUsername());
    }

    @PostMapping("/users")
    public ResponseEntity<?> lists(){
        return ResponseEntity.ok(this.userService.findUser());
    }
}
