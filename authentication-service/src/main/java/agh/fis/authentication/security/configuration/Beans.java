package agh.fis.authentication.security.configuration;

import agh.fis.authentication.security.filter.JwtFilter;
import agh.fis.authentication.service.JwtTokenService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class Beans {

    private final JwtTokenService tokenService;

    public Beans(JwtTokenService tokenService) {
        this.tokenService = tokenService;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    public JwtFilter jwtAuthenticationFilter() {
        return new JwtFilter(tokenService);
    }
}
