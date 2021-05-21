package agh.fis.order_management.service;

import agh.fis.order_management.component.IOrderMapper;
import agh.fis.order_management.model.*;
import agh.fis.order_management.repository.OrderRepository;
import org.aspectj.weaver.ast.Or;
import org.checkerframework.checker.units.qual.A;
import org.hibernate.criterion.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);

    @Autowired
    private IOrderMapper orderMapper;

    @Autowired
    private OrderRepository orderRepository;

    public OrderDto PostOrder(OrderDto order) {
        OrderEntity orderEntity = orderMapper.CreateOrderEntity(order, 1, OrderStatus.PENDING_PAYMENT, 199.99f);

        orderRepository.save(orderEntity);

        OrderDto createdOrder = orderMapper.CreateOrderDto(orderEntity);
        return createdOrder;
    }

    public List<OrderDto> GetOrdersByCustomerId(Integer id) {
        List<OrderEntity> orders = orderRepository.getOrderByCustomerId(id);

        List<OrderDto> orderDtos = orderMapper.CreateOrderDtoList(orders);

        return orderDtos;
    }

    public List<OrderDto> GetAllOrders() {
        List<OrderEntity> orders = orderRepository.findAll();

        List<OrderDto> orderDtoList = orderMapper.CreateOrderDtoList(orders);

        return orderDtoList;
    }

    public OrderDto GetOrderById(Integer id) {
        OrderEntity order = orderRepository.getOne(id);
        return orderMapper.CreateOrderDto(order);
    }
}
