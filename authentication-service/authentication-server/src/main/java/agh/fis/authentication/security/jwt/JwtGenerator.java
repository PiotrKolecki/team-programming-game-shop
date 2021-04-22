package agh.fis.authentication.security.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtGenerator {

    @Value("${jwt.expirationTime}")
    private int EXPIRATION_TIME;
    @Value("${jwt.secret}")
    private String SECRET;

    public String createToken(Authentication authentication) {
        UserDetails user = (UserDetails) authentication.getPrincipal();

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);

        return Jwts.builder()
                .setSubject(user.getUsername()) // TODO create custom UserDetails and use ID
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }
}
