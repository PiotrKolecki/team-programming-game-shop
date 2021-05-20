package agh.fis.order_management.component;

import agh.fis.order_management.model.*;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Component
public class OrderMapper implements IOrderMapper {

    private java.util.Date utilDate = new java.util.Date();

    @Override
    public List<OrderDto> CreateOrderDtoList(List<OrderEntity> orderEntities) {
        List<OrderDto> orderDtoList = new ArrayList<>();

        for (OrderEntity orderEntity : orderEntities) {
            orderDtoList.add(CreateOrderDto(orderEntity));
        }

        return orderDtoList;
    }

    @Override
    public OrderEntity CreateOrderEntity(OrderDto orderDto, int paymentId, OrderStatus status, float price) {
        OrderEntity orderEntity = new OrderEntity();

        orderEntity.setDate(new Date(utilDate.getTime()));
        orderEntity.setDelivery(CreateDeliveryEntity(orderDto.getDelivery(), orderEntity));
        orderEntity.setPaymentMethod(orderDto.getPaymentMethod());
        orderEntity.setPaymentId(paymentId);
        orderEntity.setCustomerId(orderDto.getCustomerId());
        orderEntity.setStatus(status.toString());
        orderEntity.setPrice(price);
        orderEntity.setItems(CreateItemEntityList(orderDto.getItems(), orderEntity));

        return orderEntity;
    }

    @Override
    public OrderDto CreateOrderDto(OrderEntity orderEntity) {
        OrderDto orderDto = new OrderDto();

        orderDto.setId(orderEntity.getId());
        orderDto.setDate(orderEntity.getDate().toString());
        orderDto.delivery(CreateDelivery(orderEntity.getDelivery()));
        orderDto.setPaymentMethod(orderEntity.getPaymentMethod());
        orderDto.setPaymentId(orderEntity.getPaymentId());
        orderDto.setCustomerId(orderEntity.getCustomerId());
        orderDto.setStatus(StringToOrderStatus(orderEntity.getStatus()));
        orderDto.setPrice(orderEntity.getPrice());
        orderDto.setItems(CreateItemList(orderEntity.getItems()));

        return orderDto;
    }

    @Override
    public OrderStatus StringToOrderStatus(String status) {
        switch (status) {
            case "Pending_payment":
                return OrderStatus.PENDING_PAYMENT;
            case "Completed":
                return OrderStatus.COMPLETED;
            case "Canceled":
                return OrderStatus.CANCELED;
            default:
                return null;
        }
    }

    private List<ItemEntity> CreateItemEntityList(List<Item> items, OrderEntity orderEntity) {
        List<ItemEntity> itemEntities = new ArrayList<>();

        for (Item item : items) {
            ItemEntity itemEntity = new ItemEntity();

            itemEntity.setOrder(orderEntity);
            itemEntity.setProductId(item.getId());
            itemEntity.setQuantity(item.getQuantity());

            itemEntities.add(itemEntity);
        }

        return itemEntities;
    }

    private List<Item> CreateItemList(List<ItemEntity> itemEntities) {
        List<Item> items = new ArrayList<>();

        for (ItemEntity itemEntity : itemEntities) {
            Item item = new Item();

            item.setId(itemEntity.getProductId());
            item.setQuantity(itemEntity.getQuantity());

            items.add(item);
        }

        return items;
    }

    private DeliveryEntity CreateDeliveryEntity(Delivery delivery, OrderEntity orderEntity) {
        DeliveryEntity deliveryEntity = new DeliveryEntity();

        deliveryEntity.setOrder(orderEntity);
        deliveryEntity.setFirstName(delivery.getFirstName());
        deliveryEntity.setLastName(delivery.getLastName());
        deliveryEntity.setEmail(delivery.getEmail());
        deliveryEntity.setPhone(delivery.getPhone());
        deliveryEntity.setMethod(delivery.getMethod());
        deliveryEntity.setAddress(CreateAddressEntity(delivery.getAddress(), deliveryEntity));

        return deliveryEntity;
    }

    private Delivery CreateDelivery(DeliveryEntity deliveryEntity) {
        Delivery delivery = new Delivery();

        delivery.setFirstName(deliveryEntity.getFirstName());
        delivery.setLastName(deliveryEntity.getLastName());
        delivery.setEmail(deliveryEntity.getEmail());
        delivery.setPhone(deliveryEntity.getPhone());
        delivery.setMethod(deliveryEntity.getMethod());
        delivery.setAddress(CreateAddress(deliveryEntity.getAddress()));

        return delivery;
    }

    private AddressEntity CreateAddressEntity(Address address, DeliveryEntity deliveryEntity) {
        AddressEntity addressEntity = new AddressEntity();

        addressEntity.setDelivery(deliveryEntity);
        addressEntity.setType(address.getType());
        addressEntity.setCountry(address.getCountry());
        addressEntity.setStreet(address.getStreet());
        addressEntity.setCity(address.getCity());
        addressEntity.setZipCode(address.getZipCode());
        addressEntity.setBuildingNumber(address.getBuildingNumber());
        addressEntity.setApartmentNumber(address.getApartmentNumber());

        return addressEntity;
    }

    private Address CreateAddress(AddressEntity addressEntity) {
        Address address = new Address();

        address.setType(addressEntity.getType());
        address.setCountry(addressEntity.getCountry());
        address.setStreet(addressEntity.getStreet());
        address.setCity(addressEntity.getCity());
        address.setZipCode(addressEntity.getZipCode());
        address.setBuildingNumber(addressEntity.getBuildingNumber());
        address.setApartmentNumber(addressEntity.getApartmentNumber());

        return address;
    }
}
