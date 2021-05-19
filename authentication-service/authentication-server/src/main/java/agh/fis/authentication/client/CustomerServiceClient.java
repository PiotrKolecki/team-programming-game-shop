package agh.fis.authentication.client;

import agh.fis.customers.model.CustomerAuthDto;
import agh.fis.customers.model.CustomerDto;
import agh.fis.customers.model.CustomerRegistrationDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "customers")
public interface CustomerServiceClient {

    @GetMapping("/auth")
    CustomerAuthDto getCustomerByMail(@RequestParam("mail") String mail);

    @PostMapping("/auth")
    CustomerDto register(@RequestBody CustomerRegistrationDto registrationDto);
}

