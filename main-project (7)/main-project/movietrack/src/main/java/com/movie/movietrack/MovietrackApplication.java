package com.movie.movietrack;

import com.movie.movietrack.jwtfilter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import javax.servlet.Filter;
@EnableFeignClients
@SpringBootApplication
public class MovietrackApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovietrackApplication.class, args);

	}
	@Bean
	public FilterRegistrationBean filterUrl()
	{
		FilterRegistrationBean frb=new FilterRegistrationBean();
		frb.setFilter(new JwtFilter());

		frb.addUrlPatterns(
				"/movie-app/get-movie-by-id/*",
				"/movie-app/add-movie-to-favourites",
				"/movie-app/admin/add-movie",
				"/movie-app/admin/update-movie",
				"/movie-app/admin/delete-movie/*",
				"/movie-app/delete-movie-from-favourites/*",
				"/movie-app/get-user-details",
				"/movie-app/add-movieApi-to-favourites",
				"/movie-app/get-movieApi-by-id/*",
				"/movie-app/sortByMovieName",
				"/movie-app/get-all-movies-from-favourities");

		return frb;
	}
//
//	@Bean
//	public FilterRegistrationBean filterRegistrationBean()
//	{
//		final CorsConfiguration config= new CorsConfiguration();
//		config.setAllowCredentials(true);
//		config.addAllowedOrigin("http://localhost:4200");
//		config.addAllowedHeader("*");
//		config.addAllowedMethod("*");
//		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		source.registerCorsConfiguration("/**",config);
//		FilterRegistrationBean bean=new FilterRegistrationBean(new CorsFilter(source));
//		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
//		return bean;
//	}

}
