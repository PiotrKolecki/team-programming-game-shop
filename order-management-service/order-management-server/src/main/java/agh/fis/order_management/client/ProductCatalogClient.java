package agh.fis.order_management.client;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "product-catalog")
public interface ProductCatalogClient {

}
