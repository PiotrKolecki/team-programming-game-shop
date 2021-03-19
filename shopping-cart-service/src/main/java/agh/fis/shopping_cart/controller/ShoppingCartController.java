package agh.fis.shopping_cart.controller;

import agh.fis.shopping_cart.client.ProductCatalogClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShoppingCartController {
    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartController.class);

    private final ProductCatalogClient productCatalogClient;

    public ShoppingCartController( ProductCatalogClient productCatalogClient) {
        this.productCatalogClient = productCatalogClient;
    }

    @GetMapping("/")
    public String hello() {
        logger.info("Get on shopping cart /");
        return "Hello ShoppingCart";
    }

    @GetMapping("/{id}")
    public String test(@PathVariable String id) {
        if(id.equals("1")) {
            return productCatalogClient.test();
        }
        return "null";
    }
}