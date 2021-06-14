package agh.fis.order_management.client;

import agh.fis.order_management.model.ProductDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "product-catalog")
public interface ProductCatalogClient {
    @GetMapping("/")
    ResponseEntity<List<ProductDto>> getAllProducts();

    @PutMapping("/{id}/{qty}")
    ResponseEntity<Void> changeQuantity(@RequestHeader(value = "Authorization") String authorization,
                                        @PathVariable(name = "id") Integer id,
                                        @PathVariable(name = "qty") Integer qty);
}
