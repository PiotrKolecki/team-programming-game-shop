package agh.fis.authentication.service;

import agh.fis.authentication.security.jwt.JwtGenerator;
import agh.fis.authentication.security.jwt.JwtParser;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class JwtTokenService {
    private final JwtGenerator jwtGenerator;
    private final JwtParser jwtParser;
    private final UserDetailsService userDetailsService;

    public JwtTokenService(JwtGenerator jwtGenerator, JwtParser jwtParser, UserDetailsService userDetailsService) {
        this.jwtGenerator = jwtGenerator;
        this.jwtParser = jwtParser;
        this.userDetailsService = userDetailsService;
    }

    public String generateToken(Authentication authentication) {
        return jwtGenerator.createToken(authentication);
    }

    public Optional<UserDetails> getUserFromToken(String token) {
        return Optional.ofNullable(token)
                .map(jwtParser::retrieveSubject)
                .map(userDetailsService::loadUserByUsername);
    }

    public boolean validateToken(String token) {
        return jwtParser.validate(token);
    }
}
