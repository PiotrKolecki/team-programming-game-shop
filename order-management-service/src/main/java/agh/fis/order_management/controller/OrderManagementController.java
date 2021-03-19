package agh.fis.order_management.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderManagementController {
    private static final Logger logger = LoggerFactory.getLogger(OrderManagementController.class);

    @GetMapping("/")
    public String hello() {
        logger.info("Get on order management /");
        return "Hello OrderManagement";
    }
}