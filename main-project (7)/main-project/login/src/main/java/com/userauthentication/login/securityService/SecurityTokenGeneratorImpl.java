package com.userauthentication.login.securityService;

import com.userauthentication.login.model.UserData;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator{

    @Override
    public Map<String, String> generateToken(UserData userData) {
        Map <String,String> res=new HashMap<String,String>();
        userData.setPassword("");

//        long dat= new Date().getTime()+ 900000L;


        Map<String,Object> userdata=new HashMap<>();

//        userdata.put("user",user);  // earlier for getting all user details
        userdata.put("user_role",userData.getRole());
        userdata.put("user_email",userData.getEmailId());


        String jwt= Jwts.builder()
                .setClaims(userdata)
                .setIssuedAt(new Date())
//                .setExpiration(new Date(dat))
                .signWith(SignatureAlgorithm.HS512,"mysecretkey")
                .compact();


        res.put("token",jwt);
        res.put("message","User login success");
        res.put("role",userData.getRole());
        return res;
    }


 }
