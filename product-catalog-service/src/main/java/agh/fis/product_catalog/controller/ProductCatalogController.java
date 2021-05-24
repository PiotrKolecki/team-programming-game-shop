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

import java.util.List;
import javax.validation.Valid;

@RestController
public class ProductCatalogController implements  ProductCatalogApi {
    private static final Logger logger = LoggerFactory.getLogger(ProductCatalogController.class);
    private final ProductService productService;

    ProductCatalogController(){
        this.productService = new ProductService(); 
    }

    @Override
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> products = productService.getExampleProducts();
        //return products;
        return ResponseEntity.ok(products);
        //return null;
    }

    @Override
    public ResponseEntity<ProductDto> createProduct(String authorization, @Valid ProductCreationDto productCreationDto) {
        return null;
    }


    @Override
    public ResponseEntity<ProductDto> getProduct(Integer id) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deleteProduct(String authorization, Integer id) {
        return null;
    }

    @Override
    public ResponseEntity<ProductDto> updateProduct(String authorization, Integer id, @Valid ProductUpdateDto productUpdateDto ) {
        return null;
    }    

}