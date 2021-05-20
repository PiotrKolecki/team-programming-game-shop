package agh.fis.order_management.component;

import agh.fis.order_management.model.OrderDto;
import agh.fis.order_management.model.OrderEntity;
import agh.fis.order_management.model.OrderStatus;

import java.sql.Date;
import java.util.List;

public interface IOrderMapper {

    List<OrderDto> CreateOrderDtoList(List<OrderEntity> orderEntities);
    OrderEntity CreateOrderEntity(OrderDto orderDto, int paymentId, OrderStatus status, float price);
    OrderDto CreateOrderDto(OrderEntity orderEntity);
    OrderStatus StringToOrderStatus(String status);
}
