package agh.fis.order_management.component;

import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.model.CheckTokenDto;
import org.springframework.stereotype.Component;

public interface IAuthenticationHelper {
    AuthCustomerDto validateToken(String auth);
}
