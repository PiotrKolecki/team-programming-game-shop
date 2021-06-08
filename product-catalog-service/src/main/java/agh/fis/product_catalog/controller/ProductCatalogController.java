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

import java.util.List;
import javax.validation.Valid;

@RestController
public class ProductCatalogController implements  ProductCatalogApi {
    private static final Logger logger = LoggerFactory.getLogger(ProductCatalogController.class);

    @Autowired
    private final ProductService productService;

    ProductCatalogController(ProductService productService){
        this.productService = productService; 
    }

    @Override
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @Override
    public ResponseEntity<ProductDto> createProduct(String authorization, @Valid ProductCreationDto productCreationDto) {
        ProductDto newProduct = productService.createProduct(authorization, productCreationDto);
        return null;
    }


    @Override
    public ResponseEntity<ProductDto> getProduct(Integer id) {
        ProductDto product = productService.getProduct(id);

        return ResponseEntity.ok(product);
    }

    @Override
    public ResponseEntity<Void> deactivateProduct(String authorization, Integer id) {
        productService.deactivateProduct(authorization, id);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<ProductDto> updateProduct(String authorization, @Valid ProductDto updateProductDto ) {
        ProductDto productDto = productService.updateProduct(authorization, updateProductDto);
        return ResponseEntity.ok(productDto);
    }    

    @Override
    public ResponseEntity<Void> changeQuantity(String authorization, Integer id, Integer qty){
        productService.changeQuantity(authorization, id, qty);
        return ResponseEntity.ok(null);

    }

}