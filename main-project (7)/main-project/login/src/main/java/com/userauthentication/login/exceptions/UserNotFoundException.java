package com.userauthentication.login.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND,reason = "User with this email id does not exists")
public class UserNotFoundException extends Exception{

}
