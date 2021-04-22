package agh.fis.authentication.controller;

import agh.fis.authentication.api.AuthenticationApi;
import agh.fis.authentication.model.AuthenticationRequest;
import agh.fis.authentication.model.AuthenticationResponse;
import agh.fis.authentication.service.JwtTokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class AuthenticationController implements AuthenticationApi {
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    private final AuthenticationManager authenticationManager;
    private final JwtTokenService jwtTokenService;

    public AuthenticationController(AuthenticationManager authenticationManager, JwtTokenService jwtTokenService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenService = jwtTokenService;
    }

    @Override
    public ResponseEntity<AuthenticationResponse> authenticate(@Valid AuthenticationRequest authRequest) {

        Authentication authentication = authenticationManager.authenticate(createAuthenticationToken(authRequest));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenService.generateToken(authentication);

        return ResponseEntity.ok(
                new AuthenticationResponse()
                        .token(token)
        );
    }

    private Authentication createAuthenticationToken(AuthenticationRequest request) {
        return new UsernamePasswordAuthenticationToken(request.getLogin(), request.getPassword());
    }
}