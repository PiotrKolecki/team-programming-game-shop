package agh.fis.order_management.model;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Orders")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private String deliveryMethod;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String paymentMethod;

    @Column(nullable = false)
    private int paymentId;

    @Column(nullable = false)
    private int customerId;

    @Column(nullable = false)
    private float price;

    @Column(nullable = false)
    private String status;

    @OneToMany(
            mappedBy = "order",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<ItemEntity> items = new ArrayList<>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
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

    public OrderEntity(int id, Date date, String deliveryMethod, String address, String paymentMethod, int paymentId, int customerId, float price, String status, List<ItemEntity> items) {
        this.id = id;
        this.date = date;
        this.deliveryMethod = deliveryMethod;
        this.address = address;
        this.paymentMethod = paymentMethod;
        this.paymentId = paymentId;
        this.customerId = customerId;
        this.price = price;
        this.status = status;
        this.items = items;
    }
}
