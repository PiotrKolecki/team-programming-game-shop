package agh.fis.customers.model;

import javax.persistence.Entity;

@Entity
public class Customer extends BaseEntity {

    private String mail;
    private String password;
    private UserType userType;

    public Customer() {
    }

    public Customer(int id, String mail, String password, UserType userType) {
        super(id);
        this.mail = mail;
        this.password = password;
        this.userType = userType;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }
}