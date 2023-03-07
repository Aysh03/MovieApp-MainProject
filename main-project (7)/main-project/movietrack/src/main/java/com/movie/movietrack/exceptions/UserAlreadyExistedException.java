package com.movie.movietrack.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT,reason = "User with this email Id already exist,kindly use some other email Id")
public class UserAlreadyExistedException extends Exception{
}
