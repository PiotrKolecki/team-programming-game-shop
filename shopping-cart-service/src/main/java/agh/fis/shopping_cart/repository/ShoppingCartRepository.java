package agh.fis.shopping_cart.repository;

import agh.fis.shopping_cart.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Integer> {

    ShoppingCart findByCustomerId(Integer customerId);
}