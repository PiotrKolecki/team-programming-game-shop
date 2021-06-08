package agh.fis.order_management.client;

import org.springframework.cloud.openfeign.FeignClient;
import agh.fis.payment_management.model.PaymentDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "payment-management", url = "http://35.232.212.214/api/payment")
public interface PaymentManagementClient {
    @PostMapping("/")
    ResponseEntity<PaymentDto> createPayment(@RequestHeader(value = "Authorization") String authorization,
                                             @RequestBody PaymentDto paymentDto);
}
