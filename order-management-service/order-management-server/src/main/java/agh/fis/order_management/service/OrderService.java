package agh.fis.order_management.service;

import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.model.AuthUserType;
import agh.fis.authentication.model.CheckTokenDto;
import agh.fis.common.auth.AuthenticationClient;
import agh.fis.order_management.client.PaymentManagementClient;
import agh.fis.order_management.client.ProductCatalogClient;
import agh.fis.order_management.component.IAuthenticationHelper;
import agh.fis.order_management.component.IPriceCalculator;
import agh.fis.payment_management.model.PaymentDto;
import agh.fis.order_management.component.IOrderMapper;
import agh.fis.order_management.model.*;
import agh.fis.order_management.repository.OrderRepository;
import org.aspectj.weaver.ast.Or;
import org.hibernate.criterion.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);

    @Autowired
    private IOrderMapper orderMapper;

    @Autowired
    private PaymentManagementClient paymentManagementClient;

    @Autowired
    private IAuthenticationHelper authenticationHelper;

    @Autowired
    private IPriceCalculator priceCalculator;

    @Autowired
    private OrderRepository orderRepository;

    public OrderDto PostOrder(String auth, OrderDto order) {
//        AuthCustomerDto customer = authenticationHelper.validateToken(auth);
//        if (!customer.getId().equals(order.getCustomerId()) && !customer.getUserType().equals(AuthUserType.STAFF)) {
//            logger.warn("Unauthorized access attempt by user: " + customer.toString());
//            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
//        }

        float orderPrice = priceCalculator.calculateOrderPrice(auth, order.getItems());

        PaymentDto paymentDto = new PaymentDto();
        paymentDto.setPaymentProvider(order.getPaymentMethod());
        paymentDto.setPrice(orderPrice);

        PaymentDto createdPayment;
        try {
            ResponseEntity<PaymentDto> createdPaymentResp = paymentManagementClient.createPayment(auth, paymentDto);
            if (createdPaymentResp.getStatusCode().equals(HttpStatus.OK)) {
                createdPayment = createdPaymentResp.getBody();
            } else {
                logger.error("Unable to create payment");
                throw new ResponseStatusException(HttpStatus.FAILED_DEPENDENCY, "Unable to create payment");
            }
        } catch (ResponseStatusException respExc) {
            throw respExc;
        } catch (Exception e) {
            logger.error("Error occurred when creating payment");
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred when creating payment");
        }

        OrderEntity orderEntity = orderMapper.CreateOrderEntity(order, createdPayment.getId(), OrderStatus.PENDING_PAYMENT, orderPrice);
        orderRepository.save(orderEntity);

        OrderDto createdOrder = orderMapper.CreateOrderDto(orderEntity);

        return createdOrder;
    }

    public List<OrderDto> GetOrdersByCustomerId(String auth, Integer id) {
//        AuthCustomerDto customer = authenticationHelper.validateToken(auth);
//        if (!customer.getId().equals(id) && !customer.getUserType().equals(AuthUserType.STAFF)) {
//            logger.warn("Unauthorized access attempt by user: " + customer.toString());
//            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
//        }

        List<OrderEntity> orders = orderRepository.getOrderByCustomerId(id);

        List<OrderDto> orderDtos = orderMapper.CreateOrderDtoList(orders);

        return orderDtos;
    }

    public List<OrderDto> GetAllOrders(String auth) {
//        AuthCustomerDto customer = authenticationHelper.validateToken(auth);
//        if (!customer.getUserType().equals(AuthUserType.STAFF)) {
//            logger.warn("Unauthorized access attempt by user: " + customer.toString());
//            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
//        }

        List<OrderEntity> orders = orderRepository.findAll();

        List<OrderDto> orderDtoList = orderMapper.CreateOrderDtoList(orders);

        return orderDtoList;
    }

    public OrderDto GetOrderById(String auth, Integer id) {
        OrderEntity order = orderRepository.getOne(id);
//        AuthCustomerDto customer = authenticationHelper.validateToken(auth);
//        if (!customer.getId().equals(order.getCustomerId()) && !customer.getUserType().equals(AuthUserType.STAFF)) {
//            logger.warn("Unauthorized access attempt by user: " + customer.toString());
//            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
//        }

        return orderMapper.CreateOrderDto(order);
    }

    public void HandlePaymentStatusUpdate(String auth, PaymentStatusUpdateDto paymentUpdate) {
//        AuthCustomerDto customer = authenticationHelper.validateToken(auth);

        List<OrderEntity> orders = orderRepository.getOrderByPaymentId(paymentUpdate.getId());

        for (OrderEntity order : orders) {
//            if (!customer.getId().equals(order.getCustomerId())) {
//                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
//            }
            if (paymentUpdate.getPaymentStatus().equals(UpdatedPaymentStatus.COMPLETED)) {
                order.setStatus(OrderStatus.COMPLETED.toString());
                orderRepository.save(order);
            } else if (paymentUpdate.getPaymentStatus().equals(UpdatedPaymentStatus.CANCELLED)) {
                order.setStatus(OrderStatus.CANCELLED.toString());
                orderRepository.save(order);
            }
        }
    }
}
