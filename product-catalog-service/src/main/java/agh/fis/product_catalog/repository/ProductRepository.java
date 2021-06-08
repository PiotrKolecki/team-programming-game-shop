package agh.fis.product_catalog.repository;

import agh.fis.product_catalog.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    Optional<Product> findById(Integer id);
    List<Product> findAllByActive(Boolean active);

}