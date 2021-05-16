package agh.fis.common.auth;


import agh.fis.authentication.model.AuthCustomerDto;
import agh.fis.authentication.model.CheckTokenDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertSame;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class CustomerByTokenProviderTest {
    @Mock
    private AuthenticationClient authenticationClient;

    private CustomerByTokenProvider provider;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        provider = new CustomerByTokenProvider(authenticationClient);
    }

    @Test
    void shouldProvideCustomer() {
        AuthCustomerDto authCustomerDto = mock(AuthCustomerDto.class);
        when(authenticationClient.checkToken(new CheckTokenDto().token("1234"))).thenReturn(ResponseEntity.ok(authCustomerDto));

        Optional<AuthCustomerDto> result = provider.provide("Bearer 1234");

        assertSame(authCustomerDto, result.get());
    }
}