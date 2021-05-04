package agh.fis.order_management.service;

import agh.fis.order_management.model.OrderDto;
import agh.fis.order_management.model.OrderEntity;
import agh.fis.order_management.repository.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);

    @Autowired
    private OrderRepository orderRepository;

    public void PostOrder(OrderDto order) {
        logger.info(order.toString());
    }

}
