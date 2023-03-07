package com.movie.movietrack.jwtfilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilter implements Filter {


    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws  ServletException, IOException {
        HttpServletRequest request=(HttpServletRequest) servletRequest;
        HttpServletResponse response=(HttpServletResponse) servletResponse;

        String authheader= request.getHeader("authorization");

        if(authheader==null || !authheader.startsWith("Bearer"))
        {
            throw new ServletException("Token missing ");
        }
        else
        {
            String token=authheader.substring(7);
            Claims claims= Jwts.parser().setSigningKey("mysecretKey").parseClaimsJws(token).getBody();
            System.out.println(claims);
            request.setAttribute("current_user_emailid",claims.get("user_email"));

            request.setAttribute("s",claims.get("user_email"));
            filterChain.doFilter(request,response);
        }
    }

}
