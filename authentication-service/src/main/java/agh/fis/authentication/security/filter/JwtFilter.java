package agh.fis.authentication.security.filter;

import agh.fis.authentication.service.JwtTokenService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

public class JwtFilter extends OncePerRequestFilter {

    public static final String BEARER_TOKEN = "Bearer ";
    private static final String AUTHORIZATION_HEADER = "Authorization";
    private final JwtTokenService tokenService;

    public JwtFilter(JwtTokenService tokenService) {
        this.tokenService = tokenService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        try {
            getJwtFromRequest(httpServletRequest)
                    .filter(this::isTokenValid)
                    .flatMap(tokenService::getUserFromToken)
                    .map(this::createAuthentication)
                    .ifPresent(this::updateSecurityContext);
        } catch (Exception ex) {
            // TODO log
        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }

    private Authentication createAuthentication(UserDetails userDetails) {
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

    private boolean isTokenValid(String token) {
        return StringUtils.hasText(token) && tokenService.validateToken(token);
    }

    private void updateSecurityContext(Authentication authentication) {
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    private Optional<String> getJwtFromRequest(HttpServletRequest httpServletRequest) {
        return Optional.of(httpServletRequest)
                .map(request -> request.getHeader(AUTHORIZATION_HEADER))
                .filter(StringUtils::hasText)
                .filter(token -> token.startsWith(BEARER_TOKEN))
                .map(x -> x.substring(BEARER_TOKEN.length()));
    }
}
