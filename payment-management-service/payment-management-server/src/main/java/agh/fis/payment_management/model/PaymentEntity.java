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

    private PaymentStatus paymentStatus;

    public PaymentStatus getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(PaymentStatus paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

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

    public void setDate(String date) {
        this.date.valueOf(date);
    }

    public PaymentEntity() {
    }

    public PaymentEntity(String paymentProvider, Date date, float price, PaymentStatus paymentStatus) {
        this.paymentProvider = paymentProvider;
        this.date = date;
        this.price = price;
        this.paymentStatus = paymentStatus;
        this.status = this.paymentStatus.toString();
    }

    public PaymentEntity(int id, String paymentProvider, Date date, float price, PaymentStatus paymentStatus) {
        this.id = id;
        this.paymentProvider = paymentProvider;
        this.date = date;
        this.price = price;
        this.paymentStatus = paymentStatus;
        this.status = this.paymentStatus.toString();
    }

}
