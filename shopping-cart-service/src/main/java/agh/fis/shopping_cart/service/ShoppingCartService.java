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
        newShoppingCart.setItems(new HashSet<ShoppingCartItem>());
        return modelMapper.map(newShoppingCart, ShoppingCartDto.class);
    }

    public ShoppingCartDto getShoppingCartById(Integer id) {
        ShoppingCart shoppingCart = repository.findByCustomerId(id);
        if (shoppingCart == null){
            logger.error("Shopping cart not found for customer ID: " + id);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Shopping cart not found for customer ID: " + id);
        }
        return modelMapper.map(shoppingCart, ShoppingCartDto.class);
    }

    public void deleteShoppingCart(Integer id) {
        ShoppingCart shoppingCart = repository.findByCustomerId(id);
        if (shoppingCart == null){
            logger.error("Shopping cart not found for customer ID: " + id);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Shopping cart not found for customer ID: " + id);
        }
        repository.delete(shoppingCart);
    }

}