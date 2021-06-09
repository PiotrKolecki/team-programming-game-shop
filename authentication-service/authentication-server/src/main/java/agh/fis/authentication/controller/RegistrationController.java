package agh.fis.authentication.controller;

import agh.fis.authentication.api.RegistrationApi;
import agh.fis.authentication.exception.UserNotCreatedException;
import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.model.RegistrationDto;
import agh.fis.authentication.service.RegistrationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class RegistrationController implements RegistrationApi {

    private final RegistrationService registrationService;

    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @Override
    public ResponseEntity<AuthCustomerDto> register(@Valid RegistrationDto registrationDto) {
        return registrationService.register(registrationDto)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new UserNotCreatedException("could not create user for: " + registrationDto));
    }
}
