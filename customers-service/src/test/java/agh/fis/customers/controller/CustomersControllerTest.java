package agh.fis.customers.controller;

import agh.fis.customers.model.CustomerRegistrationDto;
import agh.fis.customers.model.UserType;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class CustomersControllerTest {
    private static final String MAIL1 = "MAIL1";
    private static final String MAIL2 = "MAIL2";
    private static final String PASSWORD = "PASSWORD";
    private static final UserType USER_TYPE = UserType.CUSTOMER;

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void shouldCreateCustomers() throws Exception {
        CustomerRegistrationDto dto1 = new CustomerRegistrationDto().mail(MAIL1).password(PASSWORD).userType(USER_TYPE);
        CustomerRegistrationDto dto2 = new CustomerRegistrationDto().mail(MAIL2).password(PASSWORD).userType(USER_TYPE);

        performAndAssertCreation(dto1, 1, MAIL1);
        performAndAssertCreation(dto2, 2, MAIL2);
    }

    private void performAndAssertCreation(CustomerRegistrationDto dto, int id, String mail) throws Exception {
        mockMvc.perform(post("/")
                .header("Origin", "*")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(id))
                .andExpect(jsonPath("$.mail").value(mail))
                .andExpect(jsonPath("$.userType").value(USER_TYPE.getValue()));
    }
}