package com.userauthentication.login.securityService;

import com.userauthentication.login.model.UserData;

import java.util.Map;

public interface SecurityTokenGenerator {
    public abstract Map<String,String> generateToken(UserData userData);

}
