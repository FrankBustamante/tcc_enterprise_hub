package authService.config;

import authService.models.User;
import authService.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    public DataInitializer(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    @Override
    public void run(String... args) {
        String adminEmail = "admin@example.com";

        userRepository.findByEmail(adminEmail).ifPresentOrElse(
                u -> log.info("ℹ️ Usuario administrador ya existe ({}).", adminEmail),
                () -> {
                    User admin = new User();
                    admin.setEmail(adminEmail);
                    admin.setFullName("Administrador");
                    admin.setPassword(encoder.encode("123456"));
                    userRepository.save(admin);
                    log.info("✅ Usuario administrador creado correctamente.");
                }
        );
    }
}
