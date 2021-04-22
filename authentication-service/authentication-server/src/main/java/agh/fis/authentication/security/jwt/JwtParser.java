package agh.fis.authentication.security.jwt;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtParser {
    private final static Logger LOGGER = LoggerFactory.getLogger(JwtParser.class);

    @Value("${jwt.secret}")
    private String SECRET;

    public boolean validate(String token) {
        try {
            Jwts.parser()
                    .setSigningKey(SECRET)
                    .parse(token);
            return true;
        } catch (ExpiredJwtException ex) {
            LOGGER.info("Expired token: " + ex);
        } catch (MalformedJwtException ex) {
            LOGGER.warn("Malformed jwt: " + ex);
        } catch (SignatureException ex) {
            LOGGER.warn("Signature exception: " + ex);
        } catch (IllegalArgumentException ex) {
            LOGGER.warn("Illegal Argument: " + ex);
        }

        return false;
    }

    public String retrieveSubject(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
