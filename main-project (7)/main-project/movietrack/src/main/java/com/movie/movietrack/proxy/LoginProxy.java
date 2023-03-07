package com.movie.movietrack.proxy;
import com.movie.movietrack.model.LoginDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;

@FeignClient(name="login-auth-service",url="localhost:5555")
public interface LoginProxy {
           @PostMapping( "/login-auth/add-user")
           public abstract ResponseEntity<?> sendUserDtoToLoginAuthApp(@RequestBody LoginDTO loginDTO);

        }


