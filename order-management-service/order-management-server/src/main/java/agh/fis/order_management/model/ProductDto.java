package agh.fis.order_management.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Keeps information about Products
 */
@ApiModel(description = "Keeps information about Products")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-06-14T22:22:44.599405+02:00[Europe/Warsaw]")
public class ProductDto   {
    @JsonProperty("id")
    private Integer id;

    @JsonProperty("product_name")
    private String productName;

    @JsonProperty("date_published")
    private String datePublished;

    @JsonProperty("short_description")
    private String shortDescription;

    @JsonProperty("description")
    private String description;

    @JsonProperty("publisher")
    private String publisher;

    @JsonProperty("price")
    private BigDecimal price;

    @JsonProperty("category")
    private String category;

    @JsonProperty("quantity")
    private Integer quantity;

    @JsonProperty("active")
    private Boolean active;

    @JsonProperty("coverUrl")
    private String coverUrl;

    public agh.fis.order_management.model.ProductDto id(Integer id) {
        this.id = id;
        return this;
    }

    /**
     * Get id
     * @return id
     */
    @ApiModelProperty(required = true, value = "")
    @NotNull


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public agh.fis.order_management.model.ProductDto productName(String productName) {
        this.productName = productName;
        return this;
    }

    /**
     * Get productName
     * @return productName
     */
    @ApiModelProperty(required = true, value = "")
    @NotNull


    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public agh.fis.order_management.model.ProductDto datePublished(String datePublished) {
        this.datePublished = datePublished;
        return this;
    }

    /**
     * Get datePublished
     * @return datePublished
     */
    @ApiModelProperty(value = "")


    public String getDatePublished() {
        return datePublished;
    }

    public void setDatePublished(String datePublished) {
        this.datePublished = datePublished;
    }

    public agh.fis.order_management.model.ProductDto shortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }

    /**
     * Get shortDescription
     * @return shortDescription
     */
    @ApiModelProperty(value = "")


    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public agh.fis.order_management.model.ProductDto description(String description) {
        this.description = description;
        return this;
    }

    /**
     * Get description
     * @return description
     */
    @ApiModelProperty(value = "")


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public agh.fis.order_management.model.ProductDto publisher(String publisher) {
        this.publisher = publisher;
        return this;
    }

    /**
     * Get publisher
     * @return publisher
     */
    @ApiModelProperty(value = "")


    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public agh.fis.order_management.model.ProductDto price(BigDecimal price) {
        this.price = price;
        return this;
    }

    /**
     * Get price
     * @return price
     */
    @ApiModelProperty(value = "")

    @Valid

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public agh.fis.order_management.model.ProductDto category(String category) {
        this.category = category;
        return this;
    }

    /**
     * Get category
     * @return category
     */
    @ApiModelProperty(value = "")


    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public agh.fis.order_management.model.ProductDto quantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }

    /**
     * Get quantity
     * @return quantity
     */
    @ApiModelProperty(value = "")


    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public agh.fis.order_management.model.ProductDto active(Boolean active) {
        this.active = active;
        return this;
    }

    /**
     * Get active
     * @return active
     */
    @ApiModelProperty(value = "")


    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public agh.fis.order_management.model.ProductDto coverUrl(String coverUrl) {
        this.coverUrl = coverUrl;
        return this;
    }

    /**
     * Get coverUrl
     * @return coverUrl
     */
    @ApiModelProperty(value = "")


    public String getCoverUrl() {
        return coverUrl;
    }

    public void setCoverUrl(String coverUrl) {
        this.coverUrl = coverUrl;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        agh.fis.order_management.model.ProductDto productDto = (agh.fis.order_management.model.ProductDto) o;
        return Objects.equals(this.id, productDto.id) &&
                Objects.equals(this.productName, productDto.productName) &&
                Objects.equals(this.datePublished, productDto.datePublished) &&
                Objects.equals(this.shortDescription, productDto.shortDescription) &&
                Objects.equals(this.description, productDto.description) &&
                Objects.equals(this.publisher, productDto.publisher) &&
                Objects.equals(this.price, productDto.price) &&
                Objects.equals(this.category, productDto.category) &&
                Objects.equals(this.quantity, productDto.quantity) &&
                Objects.equals(this.active, productDto.active) &&
                Objects.equals(this.coverUrl, productDto.coverUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, productName, datePublished, shortDescription, description, publisher, price, category, quantity, active, coverUrl);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ProductDto {\n");

        sb.append("    id: ").append(toIndentedString(id)).append("\n");
        sb.append("    productName: ").append(toIndentedString(productName)).append("\n");
        sb.append("    datePublished: ").append(toIndentedString(datePublished)).append("\n");
        sb.append("    shortDescription: ").append(toIndentedString(shortDescription)).append("\n");
        sb.append("    description: ").append(toIndentedString(description)).append("\n");
        sb.append("    publisher: ").append(toIndentedString(publisher)).append("\n");
        sb.append("    price: ").append(toIndentedString(price)).append("\n");
        sb.append("    category: ").append(toIndentedString(category)).append("\n");
        sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
        sb.append("    active: ").append(toIndentedString(active)).append("\n");
        sb.append("    coverUrl: ").append(toIndentedString(coverUrl)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    /**
     * Convert the given object to string with each line indented by 4 spaces
     * (except the first line).
     */
    private String toIndentedString(Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}

