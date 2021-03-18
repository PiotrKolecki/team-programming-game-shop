package agh.fis.shopping_cart.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShoppingCartController {
    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartController.class);

    @GetMapping("/")
    public String hello() {
        logger.info("Get on shopping cart /");
        return "Hello ShoppingCart";
    }
}