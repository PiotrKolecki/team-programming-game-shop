package agh.fis.payment_management.model;


import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Payments")
public class PaymentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String paymentProvider;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private float price;


    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPaymentProvider() {
        return paymentProvider;
    }

    public void setPaymentProvider(String paymentProvider) {
        this.paymentProvider = paymentProvider;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public PaymentEntity() {
    }

    public PaymentEntity(String paymentProvider, String status, Date date, float price) {
        this.paymentProvider = paymentProvider;
        this.status = status;
        this.date = date;
        this.price = price;
    }

    public PaymentEntity(int id, String paymentProvider, String status, Date date, float price) {
        this.id = id;
        this.paymentProvider = paymentProvider;
        this.status = status;
        this.date = date;
        this.price = price;
    }
}
