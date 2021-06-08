package agh.fis.order_management.component;

import agh.fis.order_management.client.ProductCatalogClient;
import agh.fis.order_management.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PriceCalculator implements IPriceCalculator {

    @Autowired
    ProductCatalogClient productCatalogClient;

    @Override
    public float calculateOrderPrice(List<Item> items) {
        float price = 0;

        for (Item item : items) {
            // TODO: fetch prices from product catalog (when implementation finished)
            float itemPrice = 67.89f;
            price += item.getQuantity() * itemPrice;
        }
        return price;
    }
}
