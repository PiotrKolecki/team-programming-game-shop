package agh.fis.order_management.model;

import javax.persistence.*;

@Entity
@Table(name = "Items")
public class ItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name="order_id")
    private OrderEntity order;

    @Column(nullable = false)
    private int productId;

    @Column(nullable = false)
    private int quantity;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public OrderEntity getOrder() {
        return order;
    }

    public void setOrder(OrderEntity order) {
        this.order = order;
    }

    public ItemEntity(int id, int productId, int quantity, OrderEntity order) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
        this.order = order;
    }

    public ItemEntity(int id) {
        this.id = id;
    }

    public ItemEntity() {
    }
}
