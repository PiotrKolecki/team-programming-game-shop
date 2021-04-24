package agh.fis.order_management.controller;

import io.swagger.v3.core.util.Json;
import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class OrderManagementController {
    private static final Logger logger = LoggerFactory.getLogger(OrderManagementController.class);

    @GetMapping("/")
    public String HandleGetOrders() {

        return "[GET] Hello from orders/";
    }

    @GetMapping("/order/{id}")
    public String HandleGetOrder(@PathVariable String id) {
        String message;

        JSONObject response = new JSONObject();
        response.put("id", 11);
        response.put("id_customer", 3);
        response.put("total_price", 199.99 + 149.99);
        response.put("payment_id", 12345);

        JSONObject g1 = new JSONObject();
        g1.put("name", "Fifa 21");
        g1.put("id", 30);
        g1.put("price", 199.99);

        JSONObject g2 = new JSONObject();
        g2.put("name", "Game Name");
        g2.put("id", 40);
        g2.put("price", 149.99);

        JSONArray products = new JSONArray();
        products.add(g1);
        products.add(g2);

        response.put("products", products);

        return response.toString();
    }

    @GetMapping("/customer/{id}")
    public String HandleGetCustomerOrders(@PathVariable String id) {

        return "[GET] Hello from orders/customer/{id}";
    }

    @PostMapping("/")
    public String HandlePostOrder() {
        return "[POST] Hello from orders/";
    }

    @PutMapping("/")
    public String HandlePutOrder() {
        return "[PUT] Hello from orders/";
    }

    @DeleteMapping("/{id}")
    public String HandleDeleteOrder(@PathVariable String id) {

        return "[DELETE] Hello from orders/{id}";
    }
}