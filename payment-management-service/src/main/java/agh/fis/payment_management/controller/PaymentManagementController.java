package agh.fis.payment_management.controller;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;


@RestController
public class PaymentManagementController {
    private static final Logger logger = LoggerFactory.getLogger(PaymentManagementController.class);

    @GetMapping("/")
    public String GetAllPaymentMethods() {
        String response;
        JSONObject json = new JSONObject();

        String[] availablePaymentMethods = {
                "CreditCard",
                "Blik",
                "OnlinePayment",
                "WyludzenieNaWnuczka"};

        json.put("paymentMethods", availablePaymentMethods);

        response = json.toString();
        logger.info("Get on payment management /");
        return response;
    }

    @GetMapping("/order/{id}")
    public String HandleGetById(@PathVariable String id) {
        // TODO: Return order's payment status
        logger.info("Get with id on payment management /");
        return "[Get] Hello PaymentManagement";
    }

    @PostMapping("/")
    public String HandlePost() {
        logger.info("Post on payment management /");
        return "[Post] Hello PaymentManagement";
    }

    @PutMapping("/{id}")
    public String HandlePut(@PathVariable String id) {
        logger.info("Put on payment management /");
        return "[Put] Hello PaymentManagement";
    }

    @DeleteMapping("/order/{id}")
    public String HandleDelete(@PathVariable String id) {
        logger.info("Delete on payment management /");
        return "[Delete] Hello PaymentManagement";
    }
}
