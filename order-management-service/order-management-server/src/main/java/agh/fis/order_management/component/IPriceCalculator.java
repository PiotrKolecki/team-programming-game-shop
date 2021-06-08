package agh.fis.order_management.component;

import agh.fis.order_management.model.Item;

import java.util.List;

public interface IPriceCalculator {
    float calculateOrderPrice(List<Item> items);
}
