package agh.fis.product_catalog.service;

import agh.fis.product_catalog.model.*;
import agh.fis.product_catalog.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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


    public List<ProductDto> getExampleProducts() {

        //List<Product> productsDB = productRepository.findAll();
        //logger.info("Length {}",  productsDB.size());
        /*List<Product> products = new ArrayList<Product>();
        String description = "Komputerowa gra platformowa wyprodukowana w 1985 roku przez Nintendo. Powstala ona w celu zdyskontowania popularnosci gry Mario Bros. z 1983 roku; poczatkowo wydano ja na konsoli Nintendo Entertainment System (owczesnie konsola była znana pod nazwa „Famicom”, pod jaka ukazala się w Japonii). W Super Mario Bros. gracz przejmuje kontrole nad hydraulikiem Mario, ktorego zadaniem jest ocalenie ksiezniczki Toadstool porwanej przez Bowsera. W przypadku gry wieloosobowej w poszukiwaniach Mario towarzyszy Luigi, sterowany przez drugiego gracza.";
        products.add(new Product(1, "Super Mario", new Date(1985, 1, 29), "Fajna gra", description, "Nintendo", 22.50, "platformówka", 10));
        products.add(new Product(2, "Wiedźmin"));
        List<ProductDto> productDtoList = products
        .stream()
        .map(product -> modelMapper.map(product, ProductDto.class))
        .collect(Collectors.toList());
        return productDtoList;*/

        return productRepository.findAll()
        .stream()
        .map(product -> modelMapper.map(product, ProductDto.class))
        .collect(Collectors.toList());

        //Product product = new Product(1, "Super Mario");
        //return modelMapper.map(products, ProductsDto.class);
        //return modelMapper.map(products, new TypeToken<ArrayList<ProductDto>>() {}.getType());
       /* Optional<Product> productOptional = new Product(1, "Super Mario");
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            return modelMapper.map(product, ProductsDto.class);
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");*/
    }
}