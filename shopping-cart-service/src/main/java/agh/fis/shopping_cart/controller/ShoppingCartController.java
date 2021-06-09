package agh.fis.shopping_cart.controller;

import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.common.auth.CustomerByTokenProvider;
import agh.fis.shopping_cart.controller.api.ShoppingCartApi;
import agh.fis.shopping_cart.model.*;
import agh.fis.shopping_cart.service.ShoppingCartService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.Optional;


@RestController
public class ShoppingCartController implements ShoppingCartApi {
    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartController.class);

    private final ShoppingCartService shoppingCartService;
    private final CustomerByTokenProvider customerByTokenProvider;

    public ShoppingCartController(ShoppingCartService shoppingCartService, CustomerByTokenProvider customerByTokenProvider) {
        this.shoppingCartService = shoppingCartService;
        this.customerByTokenProvider = customerByTokenProvider;
    }

    @Override
    public ResponseEntity<ShoppingCartDto> createShoppingCart(@Valid ShoppingCartCreationDto shoppingCartCreationDto) {
        ShoppingCartDto shoppingCartDto = shoppingCartService.create(shoppingCartCreationDto);
        return ResponseEntity.ok(shoppingCartDto);
    }

    @Override
    public ResponseEntity<ShoppingCartDto> getShoppingCartById(String authorization, Integer id) {
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        return customerDtoOpt.map(authCustomerDto -> ResponseEntity.ok(shoppingCartService.getShoppingCartById(id)))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));
    }

    @Override
    public ResponseEntity<ShoppingCartDto> addOrRemoveItemFromShoppingCart(String authorization, Integer id, @Valid ShoppingCartModificationDto shoppingCartModificationDto) {
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        return customerDtoOpt.map(authCustomerDto -> ResponseEntity.ok(shoppingCartService.updateShoppingCart(id, shoppingCartModificationDto)))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));
    }

    @Override
    public ResponseEntity<Void> deleteShoppingCartById(String authorization, Integer id) {
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        if (customerDtoOpt.isPresent()) {
            shoppingCartService.deleteShoppingCart(id);
            return ResponseEntity.noContent().build();
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
    }
}