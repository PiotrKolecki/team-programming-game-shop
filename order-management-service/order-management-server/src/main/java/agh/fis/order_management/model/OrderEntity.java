package agh.fis.order_management.model;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "Orders")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private int orderNumber;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private String deliveryMethod;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String paymentMethod;

    @Column(nullable = false)
    private float price;

    @Column(nullable = false)
    private String status;

    @OneToMany(mappedBy="orderId")
    private List<ItemEntity> items;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(int orderNumber) {
        this.orderNumber = orderNumber;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDeliveryMethod() {
        return deliveryMethod;
    }

    public void setDeliveryMethod(String deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<ItemEntity> getItems() {
        return items;
    }

    public void setItems(List<ItemEntity> items) {
        this.items = items;
    }

    public OrderEntity(int id) {
        this.id = id;
    }

    public OrderEntity() {
    }

    public OrderEntity(int id, int orderNumber, Date date, String deliveryMethod, String address, String paymentMethod, float price, String status, List<ItemEntity> items) {
        this.id = id;
        this.orderNumber = orderNumber;
        this.date = date;
        this.deliveryMethod = deliveryMethod;
        this.address = address;
        this.paymentMethod = paymentMethod;
        this.price = price;
        this.status = status;
        this.items = items;
    }
}
