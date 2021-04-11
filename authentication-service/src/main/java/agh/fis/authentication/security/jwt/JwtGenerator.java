package agh.fis.authentication.security.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtGenerator {

    //TODO move to properties
    private static final int EXPIRE = 600000;
    private static final String SECRET = "secret";

    public String createToken(Authentication authentication) {
        UserDetails user = (UserDetails) authentication.getPrincipal();

        Date now = new Date();
        //TODO think about expiration date
        Date expiryDate = new Date(now.getTime() + EXPIRE);

        return Jwts.builder()
                .setSubject(user.getUsername()) // TODO create custom UserDetails and use ID
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }
}
