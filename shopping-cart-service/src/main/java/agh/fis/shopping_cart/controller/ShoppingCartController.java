package agh.fis.shopping_cart.controller;

import agh.fis.shopping_cart.controller.api.ShoppingCartApi;
import agh.fis.shopping_cart.model.ShoppingCartDto;
import agh.fis.shopping_cart.model.ShoppingCartCreationDto;
import agh.fis.shopping_cart.model.ShoppingCartModificationDto;
import agh.fis.shopping_cart.client.ProductCatalogClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ShoppingCartController implements ShoppingCartApi {
    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartController.class);

    private final ProductCatalogClient productCatalogClient;

    public ShoppingCartController(ProductCatalogClient productCatalogClient) {
        this.productCatalogClient = productCatalogClient;
    }

    @Override
    public ResponseEntity<ShoppingCartDto> createShoppingCart(@Valid ShoppingCartCreationDto shoppingCartCreationDto) {
        return null;
    }

    @Override
    public ResponseEntity<ShoppingCartDto> getShoppingCartById(String authorization, Integer id) {
        return null;
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