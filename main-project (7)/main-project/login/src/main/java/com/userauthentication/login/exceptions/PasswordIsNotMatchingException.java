package com.userauthentication.login.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNAUTHORIZED,reason = "Kindly Login with correct password")
public class PasswordIsNotMatchingException extends Exception {

}
