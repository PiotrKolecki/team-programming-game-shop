package agh.fis.customers.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomersController {
    private static final Logger logger = LoggerFactory.getLogger(CustomersController.class);

    @GetMapping("/")
    public String hello() {
        logger.info("Get on customers /");
        return "Hello Customers";
    }
}