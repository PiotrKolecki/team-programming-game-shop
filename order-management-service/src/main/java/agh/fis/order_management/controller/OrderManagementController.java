package agh.fis.order_management.controller;

import io.swagger.v3.core.util.Json;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
//@RequestMapping("orders")
public class OrderManagementController {
    private static final Logger logger = LoggerFactory.getLogger(OrderManagementController.class);

    @GetMapping("/")
    public String HandleGetOrders() {

        return "[GET] Hello from orders/";
    }

    @GetMapping("/order/{id}")
    public String HandleGetOrder(@PathVariable String id) {

        return "[GET] Hello from orders/order/{id}";
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