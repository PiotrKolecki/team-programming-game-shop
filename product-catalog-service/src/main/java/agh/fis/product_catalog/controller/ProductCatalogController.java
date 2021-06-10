package agh.fis.product_catalog.controller;

import agh.fis.product_catalog.controller.api.ProductCatalogApi;
import agh.fis.product_catalog.model.ProductDto;
import agh.fis.product_catalog.model.ProductCreationDto;
import agh.fis.product_catalog.model.ProductUpdateDto;
import agh.fis.product_catalog.model.Product;
import agh.fis.product_catalog.service.ProductService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import java.util.Optional;

import agh.fis.common.auth.CustomerByTokenProvider;
import agh.fis.authentication.model.AuthCustomerDto;

import java.util.List;
import javax.validation.Valid;

@RestController
public class ProductCatalogController implements  ProductCatalogApi {
    private static final Logger logger = LoggerFactory.getLogger(ProductCatalogController.class);

    @Autowired
    private final ProductService productService;

    @Autowired
    private final CustomerByTokenProvider customerByTokenProvider;

    ProductCatalogController(ProductService productService, CustomerByTokenProvider customerByTokenProvider){
        this.productService = productService; 
        this.customerByTokenProvider = customerByTokenProvider;
    }

    @Override
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @Override
    public ResponseEntity<ProductDto> createProduct(String authorization, @Valid ProductCreationDto productCreationDto) {
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        if (customerDtoOpt.isPresent()){
            ProductDto newProduct = productService.createProduct(authorization, productCreationDto);
            return null;
        }

        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
    }


    @Override
    public ResponseEntity<ProductDto> getProduct(Integer id) {
        ProductDto product = productService.getProduct(id);

        return ResponseEntity.ok(product);
    }

    @Override
    public ResponseEntity<Void> deactivateProduct(String authorization, Integer id) {
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        if (customerDtoOpt.isPresent()){
            productService.deactivateProduct(authorization, id);
            return ResponseEntity.ok(null);
        }

        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
    }

    @Override
    public ResponseEntity<ProductDto> updateProduct(String authorization, @Valid ProductDto updateProductDto ) {
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        if (customerDtoOpt.isPresent()){
            ProductDto productDto = productService.updateProduct(authorization, updateProductDto);
            return ResponseEntity.ok(productDto);
        }

        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
    }    

    @Override
    public ResponseEntity<Void> changeQuantity(String authorization, Integer id, Integer qty){
        Optional<AuthCustomerDto> customerDtoOpt = customerByTokenProvider.provide(authorization);
        if (customerDtoOpt.isPresent()){
            productService.changeQuantity(authorization, id, qty);
            return ResponseEntity.ok(null);
        }

        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);

    }

}