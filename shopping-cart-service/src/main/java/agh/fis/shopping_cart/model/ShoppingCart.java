package agh.fis.shopping_cart.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class ShoppingCart extends BaseEntity {
    @Column(unique = true, nullable = false)
    private Integer customerId;
    @Column(nullable = false)
    @OneToMany(mappedBy = "shoppingCart", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<ShoppingCartItem> items;

    public ShoppingCart() {
    }

    public ShoppingCart(int id, Integer customerId, Set<ShoppingCartItem> items) {
        super(id);
        this.customerId = customerId;
        this.items = items;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Set<ShoppingCartItem> getItems() {
        return items;
    }

    public void setItems(Set<ShoppingCartItem> items) {
        this.items = items;
    }
}