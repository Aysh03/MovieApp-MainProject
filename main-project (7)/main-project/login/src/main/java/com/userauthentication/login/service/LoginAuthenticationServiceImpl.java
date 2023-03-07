package com.userauthentication.login.service;

import com.userauthentication.login.exceptions.PasswordIsNotMatchingException;
import com.userauthentication.login.exceptions.UserAlreadyExistedException;
import com.userauthentication.login.exceptions.UserNotFoundException;
import com.userauthentication.login.model.UserData;
import com.userauthentication.login.repository.LoginAuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginAuthenticationServiceImpl implements LoginAuthenticationService {
    @Autowired
    LoginAuthenticationRepository loginAuthenticationRepository;


    @Override
    public UserData addUser(UserData userData) {

            System.out.println(userData);
//            if (userData.getEmailId().equals(loginAuthenticationRepository.findById(userData.getEmailId()).get())) {
//                throw new UserAlreadyExistedException();
//            } else {
                return loginAuthenticationRepository.save(userData);


     }



   @Override
    public UserData loginCheck(UserData userData) throws PasswordIsNotMatchingException, UserNotFoundException {
       System.out.println(userData);
        if (loginAuthenticationRepository.findById(userData.getEmailId()).isPresent()) {
            UserData result = loginAuthenticationRepository.findById(userData.getEmailId()).get();
            if (result.getPassword().equals(userData.getPassword())) {
                return result;
            } else {
                throw new PasswordIsNotMatchingException();
            }
        }
        throw new UserNotFoundException();
    }
}
