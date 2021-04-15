package agh.fis.product_catalog.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.json.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class ProductCatalogController {
    private static final Logger logger = LoggerFactory.getLogger(ProductCatalogController.class);

    @GetMapping("/")
    public String hello() {

        String json_string;
        JSONObject json = new JSONObject();

        JSONObject json1 = new JSONObject();
        json1.put("id", 1);
        json1.put("name", "Cyberpunk 2077");
        json1.put("short_description", "Short description of product");
        json1.put("description", "Long description of product");
        json1.put("publisher", "CD Projekt");
        json1.put("price", 40);
        json1.put("date_published", "01-01-2021");
        json1.put("category", "Action");
        json1.put("tags", "action;cyberpunk;scifi");

        JSONObject json2 = new JSONObject();
        json2.put("id", 2);
        json2.put("name", "Super Mario Bros");
        json2.put("short_description", "Short description of Super Mario");
        json2.put("description", "Long description of Super Mario");
        json2.put("publisher", "Nintendo");
        json2.put("price", 10);
        json2.put("date_published", "01-01-1999");
        json2.put("category", "Platform");
        json2.put("tags", "classic;2d");

        JSONArray array = new JSONArray();
        array.put(json1);
        array.put(json2);

        json.put("products", array);

        json_string = json.toString();
        return json_string;
    }

    @GetMapping("/{id}")
    public String getProduct(@PathVariable String id) {
        String json_string;

        JSONObject json = new JSONObject();
        json.put("id", 1);
        json.put("name", "Cyberpunk 2077");
        json.put("short_description", "Short description of product");
        json.put("description", "Long description of product");
        json.put("publisher", "CD Projekt");
        json.put("price", 40);
        json.put("date_published", "01-01-2021");
        json.put("category", "Action");
        json.put("tags", "action;cyberpunk;scifi");

        json_string = json.toString();
        return json_string;
    }

    @PostMapping("/")
    public String createProduct() {
        logger.info("Create product");
        return "Product created";
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable String id) {
        return String.format("Product of id %s deleted", id);
    }



}