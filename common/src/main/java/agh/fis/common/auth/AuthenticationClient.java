package agh.fis.common.auth;

import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.model.CheckTokenDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "authentication")
public interface AuthenticationClient {

    @PostMapping("/checkToken")
    ResponseEntity<AuthCustomerDto> checkToken(@RequestBody CheckTokenDto checkTokenDto);
}