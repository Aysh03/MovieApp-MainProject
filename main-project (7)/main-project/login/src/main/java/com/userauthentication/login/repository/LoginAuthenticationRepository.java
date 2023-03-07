package com.userauthentication.login.repository;

import com.userauthentication.login.model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginAuthenticationRepository extends JpaRepository<UserData,String > {
}
