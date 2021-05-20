package agh.fis.payment_management;

import agh.fis.common.SharedAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients(basePackages = {"agh.fis.payment_management", "agh.fis.common"})
@Import(SharedAutoConfiguration.class)
public class PaymentManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(PaymentManagementApplication.class, args);
    }
}