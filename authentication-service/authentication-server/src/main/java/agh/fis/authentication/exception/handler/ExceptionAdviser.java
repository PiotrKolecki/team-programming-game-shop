package agh.fis.authentication.exception.handler;

import agh.fis.authentication.exception.DownlineServiceConnectionException;
import agh.fis.authentication.exception.ResourceNotFoundException;
import agh.fis.authentication.exception.UserAlreadyExistsException;
import agh.fis.authentication.exception.UserNotCreatedException;
import agh.fis.authentication.model.AuthErrorDto;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExceptionAdviser extends ResponseEntityExceptionHandler {
    @ExceptionHandler({ResourceNotFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<AuthErrorDto> handleNoRecordFound(ResourceNotFoundException exception) {
        return new ResponseEntity<>(buildErrorMessage(exception), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({ExpiredJwtException.class})
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<AuthErrorDto> handleExpiredJwt(ExpiredJwtException exception) {
        return new ResponseEntity<>(buildErrorMessage(exception), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler({MalformedJwtException.class})
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<AuthErrorDto> handleMalformedJwt(MalformedJwtException exception) {
        return new ResponseEntity<>(buildErrorMessage(exception), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler({SignatureException.class})
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<AuthErrorDto> handleSignatureError(SignatureException exception) {
        return new ResponseEntity<>(buildErrorMessage(exception), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler({IllegalArgumentException.class})
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<AuthErrorDto> handleIllegalArgument(IllegalArgumentException exception) {
        return new ResponseEntity<>(buildErrorMessage(exception), HttpStatus.UNAUTHORIZED);
    }


    @ExceptionHandler({DownlineServiceConnectionException.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<AuthErrorDto> handleDownlineServiceException(DownlineServiceConnectionException exception) {
        return new ResponseEntity<>(buildErrorMessage(exception), HttpStatus.SERVICE_UNAVAILABLE);
    }

    @ExceptionHandler({UserNotCreatedException.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<AuthErrorDto> handleUserNotCreated(UserNotCreatedException exception) {
        return new ResponseEntity<>(buildErrorMessage(exception), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler({UserAlreadyExistsException.class})
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<AuthErrorDto> handleUserAlreadyExists(UserAlreadyExistsException exception) {
        return new ResponseEntity<>(buildErrorMessage(exception), HttpStatus.CONFLICT);
    }

    private AuthErrorDto buildErrorMessage(Exception exception) {
        return new AuthErrorDto()
                .description(exception.getMessage());
    }
}
