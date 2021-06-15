package agh.fis.order_management.component;

import agh.fis.order_management.client.ProductCatalogClient;
import agh.fis.order_management.model.ProductDto;
import agh.fis.order_management.model.Item;
import agh.fis.order_management.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Component
public class PriceCalculator implements IPriceCalculator {

    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);

    @Autowired
    private ProductCatalogClient productCatalogClient;


    @Override
    public float calculateOrderPrice(String auth, List<Item> items) {

        List<ProductDto> currentProductList;
        try {
            ResponseEntity<List<ProductDto>> productsListResp = productCatalogClient.getAllProducts();

            if (productsListResp.getStatusCode().equals(HttpStatus.OK) && productsListResp.hasBody()) {
                currentProductList = productsListResp.getBody();
            } else {
                logger.warn("Unable to get valid response from Product Catalog!");
                throw new ResponseStatusException(HttpStatus.FAILED_DEPENDENCY, "Product Catalog Failed!");
            }
        } catch (ResponseStatusException respExc) {
            throw respExc;
        } catch (Exception exc) {
            logger.warn("Unknown exception when getting products from product catalog!");
            throw new ResponseStatusException(HttpStatus.FAILED_DEPENDENCY, "Unknown error when getting products from product catalog!");
        }

        float price = 0;
        for (Item item : items) {
            ProductDto productDto = currentProductList.stream()
                    .filter(product -> item.getId().equals(product.getId()))
                    .findAny()
                    .orElse(null);

            if (productDto == null) {
                logger.error("One or more products not found in product catalog");
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "One or more products not found in product catalog");
            } else if (productDto.getQuantity() < item.getQuantity()) {
                logger.error("Not enough quantity of one or more products");
                throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Not enough quantity of one or more products");
            }

            float itemPrice = productDto.getPrice().floatValue();
            price += item.getQuantity() * itemPrice;
        }

//        for (Item item : items) {
//            ProductDto productDto = currentProductList.stream()
//                    .filter(product -> item.getId().equals(product.getId()))
//                    .findAny()
//                    .orElse(null);
//
//            ResponseEntity<Void> changeQuantityResp = productCatalogClient.changeQuantity(auth,
//                                                                                          item.getId(),
//                                                                                      productDto.getQuantity() - item.getQuantity());
//            if (!changeQuantityResp.getStatusCode().equals(HttpStatus.OK)) {
//                logger.error("Error occurred when trying to change product quantity - productId: " + item.getId());
//                throw new ResponseStatusException(HttpStatus.FAILED_DEPENDENCY);
//            }
//        }

        return price;
    }
}
