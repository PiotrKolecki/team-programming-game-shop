package agh.fis.authentication.controller;

import agh.fis.authentication.model.AuthRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/")
    public String hello(AuthRequest authRequest) {
        logger.info("Get on authentication /");
        return "Hello Authentication";
    }
}