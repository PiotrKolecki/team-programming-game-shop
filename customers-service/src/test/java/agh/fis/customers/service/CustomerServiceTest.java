package agh.fis.customers.service;

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

import static org.assertj.core.api.Assertions.assertThat;
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

        CustomerDto customerDto = service.create(REGISTRATION_DTO);

        assertThat(customerDto)
                .returns(ID, CustomerDto::getId)
                .returns(MAIL, CustomerDto::getMail)
                .returns(USER_TYPE, CustomerDto::getUserType);
    }
}