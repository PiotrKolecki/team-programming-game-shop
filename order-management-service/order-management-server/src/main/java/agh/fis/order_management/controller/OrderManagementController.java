package agh.fis.order_management.controller;

import agh.fis.order_management.controller.api.OrdersApi;
import agh.fis.order_management.model.OrderDto;
import agh.fis.order_management.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
public class OrderManagementController implements OrdersApi {
    private static final Logger logger = LoggerFactory.getLogger(OrderManagementController.class);

    private final OrderService orderService;

    public OrderManagementController(OrderService orderService) {
        this.orderService = orderService;
    }

    @Override
    public ResponseEntity<OrderDto> createOrder(String authorization, @Valid OrderDto orderDto) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deleteOrderById(String authorization, Integer id) {
        return null;
    }

    @Override
    public ResponseEntity<List<OrderDto>> getOrders(String authorization) {
        return null;
    }

    @Override
    public ResponseEntity<List<OrderDto>> getUsersOrders(String authorization, Integer id) {
        return null;
    }

    @Override
    public ResponseEntity<OrderDto> idGet(String authorization, Integer id) {
        return null;
    }

    @Override
    public ResponseEntity<OrderDto> updateOrder(String authorization, @Valid OrderDto orderDto) {
        return null;
    }
}