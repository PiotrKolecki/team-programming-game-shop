package agh.fis.payment_management.controller;



import agh.fis.payment_management.controller.api.PaymentsApi;
import agh.fis.payment_management.model.PaymentDto;
import agh.fis.payment_management.model.PaymentStatus;
import agh.fis.payment_management.service.PaymentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
public class PaymentManagementController implements PaymentsApi {
    private static final Logger logger = LoggerFactory.getLogger(PaymentManagementController.class);

    @Autowired
    private PaymentService paymentService;

    @Override
    public ResponseEntity<PaymentDto> createPayment(String authorization, PaymentDto paymentDto) {
        PaymentDto createdPayment = paymentService.createPayment(paymentDto);
        return ResponseEntity.ok(createdPayment);
    }

    @Override
    public ResponseEntity<Void> deletePaymentById(String authorization, Integer id) {
        paymentService.deletePaymentById(id);
        return ResponseEntity.noContent().build();
    }

    @Override
    public ResponseEntity<List<PaymentDto>> getAllPaymentMethods(String authorization) {
        List<PaymentDto> paymentDtos = paymentService.getAllPayments();
        return ResponseEntity.ok(paymentDtos);
    }

    @Override
    public ResponseEntity<PaymentDto> getPaymentById(String authorization, Integer id) {
        PaymentDto paymentDto = paymentService.getPaymentById(id);
        return ResponseEntity.ok(paymentDto);
    }

    @Override
    public ResponseEntity<PaymentDto> updatePayment(String authorization, PaymentDto paymentDto) {
        PaymentDto updatedPaymentDto = paymentService.updatePayment(paymentDto);
        return ResponseEntity.ok(updatedPaymentDto);
    }
}
