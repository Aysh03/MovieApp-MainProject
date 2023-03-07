package com.userauthentication.login.controller;

import com.userauthentication.login.exceptions.PasswordIsNotMatchingException;
import com.userauthentication.login.exceptions.UserAlreadyExistedException;
import com.userauthentication.login.exceptions.UserNotFoundException;
import com.userauthentication.login.model.UserData;
import com.userauthentication.login.securityService.SecurityTokenGenerator;
import com.userauthentication.login.service.LoginAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

//
//@CrossOrigin
@RestController
@RequestMapping("/login-auth")
public class LoginAuthenticationController {
    @Autowired
    LoginAuthenticationService loginAuthenticationService;
    @Autowired
    SecurityTokenGenerator securityTokenGenerator;


    @PostMapping("/add-user")
    public UserData addUser(@RequestBody UserData userData) throws UserAlreadyExistedException {
        System.out.println(userData);
        try {
            return new ResponseEntity<>(loginAuthenticationService.addUser(userData), HttpStatus.CREATED).getBody();
        } catch ( IOException e) {
            throw new UserAlreadyExistedException();
        }

    }

    @PostMapping("/login-check")
    public ResponseEntity<?> loginCheck(@RequestBody UserData userData) throws UserNotFoundException, PasswordIsNotMatchingException {

        try {
            UserData res = loginAuthenticationService.loginCheck(userData);
            System.out.println(res);
            if (res != null) {
                return new ResponseEntity<>(securityTokenGenerator.generateToken(res), HttpStatus.OK);
            }

        } catch (UserNotFoundException ux) {

            throw new UserNotFoundException();
        } catch (PasswordIsNotMatchingException e) {
            throw new PasswordIsNotMatchingException();
        }
        return new ResponseEntity<>("Authentication failed", HttpStatus.OK);
    }


}


