package com.userauthentication.login.service;

import com.userauthentication.login.exceptions.PasswordIsNotMatchingException;
import com.userauthentication.login.exceptions.UserAlreadyExistedException;
import com.userauthentication.login.exceptions.UserNotFoundException;
import com.userauthentication.login.model.UserData;

import java.io.IOException;

public interface LoginAuthenticationService {




    public abstract UserData addUser(UserData userData) throws  IOException;
    public abstract UserData loginCheck(UserData userData) throws UserNotFoundException, PasswordIsNotMatchingException;
}
