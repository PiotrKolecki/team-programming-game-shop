package agh.fis.order_management.repository;

import agh.fis.order_management.model.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {

    List<OrderEntity> getOrderByCustomerId(int id);
}
