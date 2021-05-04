package agh.fis.customers.client;

import agh.fis.customers.model.ShoppingCartCreationDto;
import agh.fis.customers.model.ShoppingCartDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

@FeignClient(name = "shopping-cart")
public interface ShoppingCartClient {

    @PostMapping("/")
    ResponseEntity<ShoppingCartDto> createShoppingCart(@Valid @RequestBody ShoppingCartCreationDto shoppingCartCreationDto);
}