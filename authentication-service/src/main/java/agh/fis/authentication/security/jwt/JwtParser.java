package agh.fis.authentication.security.jwt;

import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

@Component
public class JwtParser {

    //TODO move to properties
    private final static String SECRET = "secret";

    //TODO catch all exceptions ie expired token
    public boolean validate(String token) {
        return true;
    }

    public String retrieveSubject(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
