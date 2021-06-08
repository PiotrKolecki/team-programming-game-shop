package agh.fis.product_catalog.service;

import agh.fis.product_catalog.model.*;
import agh.fis.product_catalog.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
import java.util.List;
import java.util.ArrayList;
import java.util.ArrayList;

import java.util.stream.Collectors;
import java.sql.Date;

@Service
public class ProductService {
    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);
 
    private final ModelMapper modelMapper;

    @Autowired
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.modelMapper = new ModelMapper();
        this.productRepository = productRepository;
    }


    public List<ProductDto> getAllProducts() {

        return productRepository.findAllByActive(true)
        .stream()
        .map(product -> modelMapper.map(product, ProductDto.class))
        .collect(Collectors.toList());
    }

    public ProductDto getProduct(Integer id){
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            return modelMapper.map(product, ProductDto.class);
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
    }

    public void deactivateProduct(String authorization, Integer Id){
        Optional<Product> optionalProduct = productRepository.findById(Id);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.deactivate();
            productRepository.save(product);
        }
        else
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"); 
    }

    @Transactional
    public ProductDto createProduct(String authorization, ProductCreationDto productCreationDto){
        Product rawProduct = modelMapper.map(productCreationDto, Product.class);
        Product newProduct = productRepository.save(rawProduct);

        return modelMapper.map(newProduct, ProductDto.class);
    }

    @Transactional
    public ProductDto updateProduct(String authorization, ProductDto productDto){
        Product rawProduct = modelMapper.map(productDto, Product.class);
        Optional<Product> optionalProduct = productRepository.findById(rawProduct.getId());
        if (!optionalProduct.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");  
        }
        Product savedProduct = productRepository.save(rawProduct);
        return modelMapper.map(savedProduct, ProductDto.class);
    }

    @Transactional
    public void changeQuantity(String authorization, Integer id, Integer quantity){
        Optional<Product> productOptional = productRepository.findById(id);
        if (!productOptional.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"); 
        }
        Product product = productOptional.get();
        if (product.getQuantity() < quantity){
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Not enough quantity"); 
        }

        product.setQuantity(product.getQuantity() - quantity);
        productRepository.save(product);
    }
}