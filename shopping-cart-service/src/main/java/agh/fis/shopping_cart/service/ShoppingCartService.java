package agh.fis.shopping_cart.service;

import agh.fis.shopping_cart.model.*;
import agh.fis.shopping_cart.client.ProductCatalogClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
import java.util.*;
import java.text.SimpleDateFormat;
import java.math.BigDecimal;

@Service
public class ShoppingCartService {
    private static final Logger logger = LoggerFactory.getLogger(ShoppingCartService.class);

    private final ProductCatalogClient productCatalogClient;

    public ShoppingCartService(ProductCatalogClient productCatalogClient) {
        this.productCatalogClient = productCatalogClient;
    }

    public ShoppingCartDto create(ShoppingCartCreationDto shoppingCartCreationDto) {
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        ShoppingCartDto shoppingCartDto = createShoppingCartObject(10, shoppingCartCreationDto.getCustomerId(), formatter.format(date), new ArrayList<GameDto>());
        return shoppingCartDto;
    }

    // only to create dummy data, probably will be removed
    public ShoppingCartDto getShoppingCartById(Integer id) {
        ShoppingCartDto shoppingCartDto = createShoppingCartObject(id, 5, "04-05-2021 07:29:42", createGamesList());
        return shoppingCartDto;
    }

    // only to create dummy data, probably will be removed
    public ShoppingCartDto createShoppingCartObject(Integer id, Integer customer_id, String date,
                                                    List<GameDto> products){
        ShoppingCartDto shoppingCartDto = new ShoppingCartDto();
        shoppingCartDto.setId(id);
        shoppingCartDto.setCustomerId(customer_id);
        shoppingCartDto.setDateCreated(date);
        shoppingCartDto.setProducts(products);
        return shoppingCartDto;
    }

    // only to create dummy data, probably will be removed
    public List<GameDto> createGamesList(){
        GameDto game1 = new GameDto();
        game1.setId(1);
        game1.setName("GTA V");
        game1.setPrice(BigDecimal.valueOf(30.99));
        game1.setPublisher("Rocsktar Games");
        GameDto game2 = new GameDto();
        game2.setId(2);
        game2.setName("The Witcher");
        game2.setPrice(BigDecimal.valueOf(52.99));
        game2.setPublisher("CD Projekt");
        return Arrays.asList(new GameDto[]{game1, game2});
    }
}