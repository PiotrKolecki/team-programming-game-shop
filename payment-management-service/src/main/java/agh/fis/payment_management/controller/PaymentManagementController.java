package agh.fis.payment_management.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentManagementController {
    private static final Logger logger = LoggerFactory.getLogger(PaymentManagementController.class);

    @GetMapping("/")
    public String hello() {
        logger.info("Get on payment management /");
        return "Hello PaymentManagement";
    }
}