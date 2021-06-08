package agh.fis.payment_management.client;

import org.springframework.cloud.openfeign.FeignClient;
import agh.fis.payment_management.model.PaymentDto;
import agh.fis.order_management.model.PaymentStatusUpdateDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "order-management")
public interface OrderManagementClient {
    @PostMapping("/paymentStatus")
    ResponseEntity<Void> notifyPaymentStatusChanged(@RequestHeader(value = "Authorization") String authorization,
                                                    @RequestBody PaymentStatusUpdateDto paymentDto);
}

