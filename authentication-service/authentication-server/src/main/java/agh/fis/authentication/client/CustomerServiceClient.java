package agh.fis.authentication.client;

import agh.fis.customers.model.CustomerAuthDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "customers")
public interface CustomerServiceClient {

    @GetMapping("/auth")
    CustomerAuthDto getCustomerByMail(@RequestParam("mail") String mail);
}

