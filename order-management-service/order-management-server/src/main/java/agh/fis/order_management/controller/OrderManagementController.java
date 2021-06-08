package agh.fis.order_management.controller;

import agh.fis.order_management.controller.api.OrdersApi;
import agh.fis.order_management.model.OrderDto;
import agh.fis.order_management.model.PaymentStatusUpdateDto;
import agh.fis.order_management.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
public class OrderManagementController implements OrdersApi {
    private static final Logger logger = LoggerFactory.getLogger(OrderManagementController.class);

    @Autowired
    private OrderService orderService;

    @Override
    public ResponseEntity<OrderDto> createOrder(String authorization, @Valid OrderDto orderDto) {
        OrderDto responseBody = orderService.PostOrder(authorization, orderDto);
        return ResponseEntity.ok(responseBody);
    }

    @Override
    public ResponseEntity<Void> deleteOrderById(String authorization, Integer id) {
        return null;
    }

    @Override
    public ResponseEntity<List<OrderDto>> getOrders(String authorization) {
        return ResponseEntity.ok(orderService.GetAllOrders(authorization));
    }

    @Override
    public ResponseEntity<List<OrderDto>> getUsersOrders(String authorization, Integer id) {
        List<OrderDto> responseBody = orderService.GetOrdersByCustomerId(authorization, id);
        return ResponseEntity.ok(responseBody);
    }

    @Override
    public ResponseEntity<Void> notifyPaymentStatusChanged(String authorization, @Valid PaymentStatusUpdateDto paymentStatusUpdateDto) {
        orderService.HandlePaymentStatusUpdate(authorization, paymentStatusUpdateDto);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @Override
    public ResponseEntity<OrderDto> getOrderById(String authorization, Integer id)
    {
        OrderDto responseBody = orderService.GetOrderById(authorization, id);
        return ResponseEntity.ok(responseBody);
    }

    @Override
    public ResponseEntity<OrderDto> updateOrder(String authorization, @Valid OrderDto orderDto) {
        return null;
    }
}