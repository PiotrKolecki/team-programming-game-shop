package agh.fis.authentication.mapper;

import agh.fis.customers.model.CustomerAuthDto;
import agh.fis.customers.model.UserType;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.validation.constraints.NotNull;
import java.util.Optional;

@Component
public class CustomerToUserDetailsMapper {
    public UserDetails map(@NotNull CustomerAuthDto customerAuthDto) {
        return User.withUsername(customerAuthDto.getMail())
                .password(customerAuthDto.getPassword())
                .roles(getRole(customerAuthDto))
                .build();
    }

    private String getRole(CustomerAuthDto customerAuthDto) {
        return Optional.of(customerAuthDto)
                .map(CustomerAuthDto::getUserType)
                .map(UserType::getValue)
                .orElse(null);
    }
}
