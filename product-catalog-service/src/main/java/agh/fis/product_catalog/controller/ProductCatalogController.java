package agh.fis.product_catalog.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductCatalogController {
    private static final Logger logger = LoggerFactory.getLogger(ProductCatalogController.class);

    @GetMapping("/")
    public String hello() {
        logger.info("Get on product catalog /");
        return "Hello ProductCatalog";
    }

    @GetMapping("/test")
    public String test() {
        return "Some product";
    }
}