package agh.fis.shopping_cart.service;

import org.modelmapper.ModelMapper;
import agh.fis.shopping_cart.model.*;
import agh.fis.shopping_cart.client.ProductCatalogClient;
import agh.fis.shopping_cart.repository.ShoppingCartRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

@Service
public class ShoppingCartService {
    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartService.class);

    private final ProductCatalogClient productCatalogClient;
    private final ShoppingCartRepository repository;
    private final ModelMapper modelMapper;

    public ShoppingCartService(ProductCatalogClient productCatalogClient, ShoppingCartRepository repository, ModelMapper modelMapper) {
        this.productCatalogClient = productCatalogClient;
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public ShoppingCartDto create(ShoppingCartCreationDto shoppingCartCreationDto) {

        ShoppingCart existingShoppingCart = repository.findByCustomerId(shoppingCartCreationDto.getCustomerId());
        if (existingShoppingCart != null) {
            logger.error("Shopping cart already exists for customer ID: " + shoppingCartCreationDto.getCustomerId());
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Shopping cart already exists for customer ID: "
                    + shoppingCartCreationDto.getCustomerId());
        }

        ShoppingCart newShoppingCart = modelMapper.map(shoppingCartCreationDto, ShoppingCart.class);
        newShoppingCart = repository.save(newShoppingCart);
        logger.info("Shopping cart created for customer ID: " + shoppingCartCreationDto.getCustomerId());
        return modelMapper.map(newShoppingCart, ShoppingCartDto.class);
    }

    public ShoppingCartDto getShoppingCartById(Integer id) {
        ShoppingCart shoppingCart = repository.findByCustomerId(id);
        if (shoppingCart == null){
            logger.error("Shopping cart not found for customer ID: " + id);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Shopping cart not found for customer ID: " + id);
        }
        logger.info("" + shoppingCart.getItems());
        return modelMapper.map(shoppingCart, ShoppingCartDto.class);
    }

    public ShoppingCartDto updateShoppingCart(Integer id, ShoppingCartModificationDto shoppingCartModificationDto) {
        ShoppingCart shoppingCart = repository.findByCustomerId(id);
        if (shoppingCart == null){
            logger.error("Shopping cart not found for customer ID: " + id);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Shopping cart not found for customer ID: " + id);
        }

        if (shoppingCartModificationDto.getOperation() == Operation.ADD){
            shoppingCart = add_item_to_cart(shoppingCart, shoppingCartModificationDto);
        }
        else{
            shoppingCart = remove_item_from_cart(shoppingCart, shoppingCartModificationDto);
        }

        return modelMapper.map(shoppingCart, ShoppingCartDto.class);
    }

    public ShoppingCart add_item_to_cart(ShoppingCart shoppingCart, ShoppingCartModificationDto shoppingCartModificationDto){
        ShoppingCartItem existingShoppingCartItem = shoppingCart.getItems().stream()
                .filter(i -> i.getProductId() == shoppingCartModificationDto.getProductId()).findAny().orElse(null);
        try {
            if (existingShoppingCartItem != null) {
                existingShoppingCartItem.setQuantity(existingShoppingCartItem.getQuantity() + shoppingCartModificationDto.getQuantity());
            } else {
                ShoppingCartItem newShoppingCartItem =
                        createShoppingCartItem(shoppingCartModificationDto, shoppingCart);
                shoppingCart.getItems().add(newShoppingCartItem);
            }

            return repository.save(shoppingCart);
        }

        catch (Exception ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Error while updating shopping cart", ex);
        }
    }

    public ShoppingCart remove_item_from_cart(ShoppingCart shoppingCart, ShoppingCartModificationDto shoppingCartModificationDto){
        ShoppingCartItem existingShoppingCartItem = shoppingCart.getItems().stream()
                .filter(i -> i.getProductId() == shoppingCartModificationDto.getProductId()).findAny().orElse(null);
        try {
            if (existingShoppingCartItem == null) {
                return shoppingCart;
            }
            if (existingShoppingCartItem.getQuantity() <= shoppingCartModificationDto.getQuantity()) {
                shoppingCart.getItems().removeIf(i -> i.getProductId() == shoppingCartModificationDto.getProductId());
            } else {
                existingShoppingCartItem.setQuantity(existingShoppingCartItem.getQuantity() - shoppingCartModificationDto.getQuantity());
            }

            return repository.save(shoppingCart);
        }

        catch (Exception ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Error while updating shopping cart", ex);
        }
    }

    public ShoppingCartItem createShoppingCartItem(ShoppingCartModificationDto shoppingCartModificationDto,
                                                   ShoppingCart shoppingCart){
        ShoppingCartItem shoppingCartItem = new ShoppingCartItem();
        shoppingCartItem.setProductId(shoppingCartModificationDto.getProductId());
        shoppingCartItem.setQuantity(shoppingCartModificationDto.getQuantity());
        shoppingCartItem.setShoppingCart(shoppingCart);
        return shoppingCartItem;
    }

    public void deleteShoppingCart(Integer id) {
        ShoppingCart shoppingCart = repository.findByCustomerId(id);
        if (shoppingCart == null){
            logger.error("Shopping cart not found for customer ID: " + id);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Shopping cart not found for customer ID: " + id);
        }
        repository.delete(shoppingCart);
        logger.info("Shopping cart deleted for customer ID: " + id);
    }

}