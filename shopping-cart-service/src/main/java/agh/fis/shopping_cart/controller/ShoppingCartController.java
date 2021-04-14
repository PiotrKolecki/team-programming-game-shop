package agh.fis.shopping_cart.controller;

import agh.fis.shopping_cart.client.ProductCatalogClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.json.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShoppingCartController {
    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartController.class);

    private final ProductCatalogClient productCatalogClient;

    public ShoppingCartController( ProductCatalogClient productCatalogClient) {
        this.productCatalogClient = productCatalogClient;
    }

    @GetMapping("/{id}")
    public String getCart(@PathVariable String id) {
        String message;
        JSONObject json = new JSONObject();
        json.put("id", 1);
        json.put("id_customer", 3);
        json.put("date_created", "20-03-2021");

        JSONArray array = new JSONArray();
        JSONObject item1 = new JSONObject();
        item1.put("name", "The Witcher");
        item1.put("id", 3);
        item1.put("price", 80.5);
        item1.put("publisher", "CD Projekt");
        array.put(item1);

        JSONObject item2 = new JSONObject();
        item2.put("name", "GTA V");
        item2.put("id", 4);
        item2.put("price", 120);
        item2.put("publisher", "Rockstar Games");
        array.put(item2);

        json.put("products", array);

        message = json.toString();
        return message;
    }

    @PostMapping("/")
    public String createCart() {
        logger.info("Get on shopping cart /");
        return String.format("Cart with id %s created", 3);
    }


    @PutMapping("/")
    public String addOrRemove() {
        logger.info("Get on shopping cart /");
        return "Item added/removed";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable String id) {
        logger.info("Get on shopping cart /");
        return String.format("Cart of customer with id %s deleted", id);
    }


}