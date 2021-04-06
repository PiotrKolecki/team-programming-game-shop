package agh.fis.authentication.controller;

import agh.fis.authentication.api.AuthenticationApi;
import agh.fis.authentication.model.AuthenticationRequest;
import agh.fis.authentication.model.AuthenticationResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class AuthenticationController implements AuthenticationApi {
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/")
    public String hello(AuthenticationRequest authenticationRequest) {
        logger.info("Get on authentication /");
        return "Hello Authentication";
    }

    @Override
    public ResponseEntity<AuthenticationResponse> authenticate(@Valid AuthenticationRequest authRequest) {
        return ResponseEntity.ok(
                new AuthenticationResponse()
                        .token("token")
        );
    }
}