package agh.fis.shopping_cart.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ShoppingCartItem extends BaseEntity {
    @JoinColumn(nullable = false)
    @ManyToOne
    private ShoppingCart shoppingCart;
    @Column(nullable = false)
    private long productId;
    @Column(nullable = false)
    private long quantity;

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }
}