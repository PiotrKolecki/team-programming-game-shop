package agh.fis.customers.service;

import agh.fis.common.util.LogKeeper;
import agh.fis.customers.model.Customer;
import agh.fis.customers.model.CustomerDto;
import agh.fis.customers.model.CustomerRegistrationDto;
import agh.fis.customers.model.UserType;
import agh.fis.customers.repository.CustomerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

class CustomerServiceTest {
    private static final int ID = 1;
    private static final String MAIL = "MAIL";
    private static final String PASSWORD = "PASSWORD";
    private static final UserType USER_TYPE = UserType.CUSTOMER;

    private static final CustomerRegistrationDto REGISTRATION_DTO =
            new CustomerRegistrationDto().mail(MAIL).password(PASSWORD).userType(USER_TYPE);
    private static final Customer CUSTOMER = new Customer(ID, MAIL, PASSWORD, USER_TYPE);

    private final ModelMapper mapper = new ModelMapper();

    @Mock
    private CustomerRepository repository;

    private CustomerService service;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        service = new CustomerService(mapper, repository);
    }

    @Test
    void shouldCreateCustomer() {
        when(repository.save(any())).thenReturn(CUSTOMER);

        try (LogKeeper keeper = new LogKeeper(CustomerService.class)) {
            CustomerDto customerDto = service.create(REGISTRATION_DTO);

            assertThat(customerDto)
                    .returns(ID, CustomerDto::getId)
                    .returns(MAIL, CustomerDto::getMail)
                    .returns(USER_TYPE, CustomerDto::getUserType);
            assertThat(keeper.containsInfo("Customer of type Customer with id 1 created")).isTrue();
        }
    }

    @Test
    void shouldGetCustomerByMailPassword() {
        when(repository.getCustomerByMailAndPassword(MAIL, PASSWORD)).thenReturn(Optional.of(CUSTOMER));

        try (LogKeeper keeper = new LogKeeper(CustomerService.class)) {
            CustomerDto customerDto = service.getByMailAndPassword(MAIL, PASSWORD);

            assertThat(customerDto)
                    .returns(ID, CustomerDto::getId)
                    .returns(MAIL, CustomerDto::getMail)
                    .returns(USER_TYPE, CustomerDto::getUserType);
            assertThat(keeper.containsInfo("Returning customer with id 1")).isTrue();
        }
    }

    @Test
    void shouldThrowWhenCustomerByMailPasswordNotFound() {
        when(repository.getCustomerByMailAndPassword(MAIL, PASSWORD)).thenReturn(Optional.empty());

        try (LogKeeper keeper = new LogKeeper(CustomerService.class)) {
            assertThatThrownBy(() -> service.getByMailAndPassword(MAIL, PASSWORD))
                    .isExactlyInstanceOf(ResponseStatusException.class)
                    .hasMessage("404 NOT_FOUND \"Customer not found\"");

            assertThat(keeper.containsInfo(String.format("Customer M:%s P:%s not found", MAIL, PASSWORD))).isTrue();
        }
    }
}