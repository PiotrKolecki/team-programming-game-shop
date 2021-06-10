package agh.fis.product_catalog.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;

import java.sql.Date; 

@Entity
public class Product extends ProductBaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, columnDefinition="TEXT")
    private String product_name;

    @Column(nullable = true)
    private Date date_published;

    @Column(nullable = true, columnDefinition="TEXT")
    private String short_description;

    @Column(nullable = true, columnDefinition="TEXT")
    private String description;

    @Column(nullable = true)
    private String publisher;

    @Column(nullable = true)
    private float price;

    @Column(nullable = true)
    private String category;

    @Column(nullable = true)
    private Integer quantity;

    @Column(nullable = true)
    private Boolean active = true;

    @Column(nullable=true)
    private String coverUrl;

    public Product() {
    }

    public Product(int id, String product_name, Date date_published, String short_description, String description, String publisher, float price, String category, Integer quantity, Boolean active, String coverUrl) {
        this.id = id;
        this.product_name = product_name;
        this.date_published = date_published;
        this.short_description = short_description;
        this.description = description;
        this.publisher = publisher;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
        this.active = active;
        this.coverUrl = coverUrl;
    }

    public Product(int id, String product_name)
    {
        this.id = id;
        this.product_name = product_name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductName() {
        return product_name;
    }

    public void setProductName(String product_name) {
        this.product_name = product_name;
    }

    public Date getDatePublished() {
        return date_published;
    }

    public void setDatePublished(Date date_published) {
        this.date_published = date_published;
    }

    public String getShortDescription() {
        return short_description;
    }

    public void setShortDescription(String short_description) {
        this.short_description = short_description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }


    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Boolean isActive() {
        return active;
    }

    public void deactivate() {
        this.active = false;
    }

    public void activate() {
        this.active = true;
    }

    public String getCoverUrl() {
        return coverUrl;
    }

    public void setCoverUrl(String coverUrl) {
        this.coverUrl = coverUrl;
    }

}