package agh.fis.shopping_cart.controller;

import agh.fis.shopping_cart.controller.api.ShoppingCartApi;
import agh.fis.shopping_cart.model.*;
import agh.fis.shopping_cart.service.ShoppingCartService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController
public class ShoppingCartController implements ShoppingCartApi {
    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartController.class);

    private final ShoppingCartService shoppingCartService;

    public ShoppingCartController(ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @Override
    public ResponseEntity<ShoppingCartDto> createShoppingCart(@Valid ShoppingCartCreationDto shoppingCartCreationDto) {
        ShoppingCartDto shoppingCartDto = shoppingCartService.create(shoppingCartCreationDto);
        return ResponseEntity.ok(shoppingCartDto);
    }

    @Override
    public ResponseEntity<ShoppingCartDto> getShoppingCartById(String authorization, Integer id) {
        ShoppingCartDto shoppingCartDto = shoppingCartService.getShoppingCartById(id);
        return ResponseEntity.ok(shoppingCartDto);
    }

    @Override
    public ResponseEntity<ShoppingCartDto> addOrRemoveItemFromShoppingCart(String authorization, Integer id, @Valid ShoppingCartModificationDto shoppingCartModificationDto) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deleteShoppingCartById(String authorization, Integer id) {
        return null;
    }

}