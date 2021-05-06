package agh.fis.order_management.service;

import agh.fis.order_management.model.*;
import agh.fis.order_management.repository.OrderRepository;
import org.aspectj.weaver.ast.Or;
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
    private OrderRepository orderRepository;

    public OrderDto PostOrder(OrderDto order) {
        OrderEntity orderEntity = new OrderEntity();
        List<ItemEntity> items = new ArrayList<ItemEntity>();
        for (Product product : order.getItems()) {
            ItemEntity item = new ItemEntity();

            item.setProductId(product.getId());
            item.setQuantity(product.getQuantity());
            item.setOrder(orderEntity);

            items.add(item);
        }
        java.util.Date utilDate = new java.util.Date();
        orderEntity.setDate(new Date(utilDate.getTime()));

        orderEntity.setDeliveryMethod(order.getDeliveryMethod());
        orderEntity.setAddress(order.getAddress());
        orderEntity.setPaymentMethod(order.getPaymentMethod());
        orderEntity.setPaymentId(10);
        orderEntity.setCustomerId(order.getCustomerId());
        orderEntity.setPrice(199.99f);
        orderEntity.setStatus("Pending_payment");
        orderEntity.setItems(items);

        orderRepository.save(orderEntity);

        return OrderEntityToOrderDto(orderEntity);
    }

    private OrderDto OrderEntityToOrderDto(OrderEntity orderEntity) {
        List<Product> products = new ArrayList<>();
        for (ItemEntity item : orderEntity.getItems()) {
            Product product = new Product();
            product.setQuantity(item.getQuantity());
            product.setId(item.getProductId());
            products.add(product);
        }
        OrderDto orderDto = new OrderDto();
        orderDto.setId(orderEntity.getId());
        orderDto.setDate(orderEntity.getDate().toString());
        orderDto.setDeliveryMethod(orderEntity.getDeliveryMethod());
        orderDto.setAddress(orderEntity.getAddress());
        orderDto.setPaymentMethod(orderEntity.getPaymentMethod());
        orderDto.setPaymentId(orderEntity.getPaymentId());
        orderDto.setCustomerId(orderEntity.getCustomerId());
        orderDto.setPrice(orderEntity.getPrice());

        OrderStatus status = null;
        switch (orderEntity.getStatus()) {
            case "Canceled":
                status = OrderStatus.CANCELED;
                break;
            case "Pending_payment":
                status = OrderStatus.PENDING_PAYMENT;
                break;
            case "Completed":
                status = OrderStatus.COMPLETED;
                break;
        }

        orderDto.setStatus(status);
        orderDto.setItems(products);

        return orderDto;
    }

    private List<OrderDto> OrderEntitiesToOrderDtos(List<OrderEntity> orderEntities) {
        List<OrderDto> orderDtos = new ArrayList<>();

        for (OrderEntity order : orderEntities) {
            orderDtos.add(OrderEntityToOrderDto(order));
        }

        return orderDtos;
    }

    public List<OrderDto> GetOrdersByCustomerId(Integer id) {
        List<OrderEntity> orders = orderRepository.getOrderByCustomerId(id);

        List<OrderDto> orderDtos = OrderEntitiesToOrderDtos(orders);

        return orderDtos;
    }

    public List<OrderDto> GetAllOrders() {
        List<OrderEntity> orders = orderRepository.findAll();

        List<OrderDto> orderDtos = OrderEntitiesToOrderDtos(orders);

        return orderDtos;
    }

    public OrderDto GetOrderById(Integer id) {
        OrderEntity order = orderRepository.getOne(id);
        return OrderEntityToOrderDto(order);
    }


}
