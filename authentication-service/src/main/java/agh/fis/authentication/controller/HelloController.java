package agh.fis.authentication.controller;

import agh.fis.authentication.model.AuthenticationRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    private static final Logger logger = LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/")
    public String hello(AuthenticationRequest authenticationRequest) {
        return "Hello Authentication";
    }
}
