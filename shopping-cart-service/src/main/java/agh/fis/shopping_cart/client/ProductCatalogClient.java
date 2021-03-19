package agh.fis.shopping_cart.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "product-catalog")
public interface ProductCatalogClient {

    @GetMapping("/test")
    String test();
}