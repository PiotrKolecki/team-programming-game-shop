package agh.fis.authentication.service;

import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@Primary
public class UserDetailsServiceImpl implements UserDetailsService {

    private static final String IN_MEMORY_USER = "sampleuser";
    private static final String IN_MEMORY_PASSWORD = "samplepassword";
    private static final String IN_MEMORY_ROLE = "ADMIN";

    @Override
    //TODO implementation
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        if (IN_MEMORY_USER.equals(s)) {
            return User.withUsername(IN_MEMORY_USER)
                    .password(IN_MEMORY_PASSWORD)
                    .roles(IN_MEMORY_ROLE)
                    .build();
        } else throw new UsernameNotFoundException("");
    }
}
