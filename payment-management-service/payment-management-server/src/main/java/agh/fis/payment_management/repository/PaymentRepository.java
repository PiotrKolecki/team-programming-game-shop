package agh.fis.payment_management.repository;

import agh.fis.payment_management.model.PaymentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<PaymentEntity, Integer> {

}
