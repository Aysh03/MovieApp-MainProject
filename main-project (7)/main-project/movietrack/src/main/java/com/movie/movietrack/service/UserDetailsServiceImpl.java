package com.movie.movietrack.service;

import com.movie.movietrack.exceptions.UserAlreadyExistedException;
import com.movie.movietrack.model.*;
import com.movie.movietrack.proxy.LoginProxy;
import com.movie.movietrack.repository.MovieRepository;
import com.movie.movietrack.repository.UserDetailsRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserDetailsRepository userDetailsRepository;
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    LoginProxy loginProxy;

//    @Override
//    public UserDetails addFavouriteMovie(String movieId, String emailId) {
//
//        if (userDetailsRepository.findById(emailId).isPresent()) {
//            UserDetails user = userDetailsRepository.findById(emailId).get();
//            user.getMovies().add(movieId);
//
//            return userDetailsRepository.save(user);
//        } else {
//            return null;
//        }
//    }

    @Override
    public UserDetails addFavouriteApiMovie(ResultsEntity resultsEntities, String email) {

        if (userDetailsRepository.findById(email).isPresent()) {
            UserDetails user = userDetailsRepository.findById(email).get();
            List<ResultsEntity> currentResultsEntities = user.getResult();
            currentResultsEntities.add(resultsEntities);

            user.setResult(currentResultsEntities);
            System.out.println(user + "this is inside the api movie add");
            return userDetailsRepository.save(user);
        } else {
            return null;
        }
    }

    @Override
    public List<ResultsEntity> getAllMoviesFromFav(String email) {
        if (userDetailsRepository.findById(email).isPresent()) {
            UserDetails user = userDetailsRepository.findById(email).get();
            user.getResult();
            System.out.println(user.getResult());

            return user.getResult();

        } else
            return null;
    }


//    addFavouriteApiMovie

    @Override
    public UserDetails getMovieAPIById(String movieIdFromApi, String emailId) {
        if (userDetailsRepository.findById(emailId).isPresent()) {
            System.out.println("email" + emailId + "movieId" + movieIdFromApi);

            UserDetails userDatas = userDetailsRepository.findById(emailId).get();
            List<ResultsEntity> movieapidata = userDatas.getResult();
            for (int i = 0; i < movieapidata.size(); i++) {
                System.out.println(movieIdFromApi);
                System.out.println(movieapidata.get(i));
                return userDatas;
            }
        }

        return null;
    }

    @Override
    public boolean deleteMovieFromFavourites(int movieIdFromApi, String emailId) {
        if (userDetailsRepository.findById(emailId).isPresent()) {
            System.out.println("email" + emailId);
            System.out.println("movieId" + movieIdFromApi);
            UserDetails userDatas = userDetailsRepository.findById(emailId).get();
            List<ResultsEntity> favMovies = userDatas.getResult();
            System.out.println(favMovies);
            for (int i = 0; i < favMovies.size(); i++) {
                System.out.println(favMovies);
                if (favMovies.get(i).getId() == movieIdFromApi) {
                    System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
                    favMovies.remove(i);
                }
            }
            System.out.println(userDatas);
            userDatas.setResult(favMovies);
            userDetailsRepository.save(userDatas);

            return true;
        } else {
            return false;
        }
    }

//


    @Override
    public UserDetails getMovieById(String movieIdFromApi, String emailId) {
        if (userDetailsRepository.findById(emailId).isPresent()) {
            System.out.println("email" + emailId + "movieId" + movieIdFromApi);
            UserDetails userDatas = userDetailsRepository.findById(emailId).get();
            List<String> movies = userDatas.getMovies();
            for (int i = 0; i < movies.size(); i++) {
                System.out.println(movieIdFromApi);
                System.out.println(movies.get(i));
                return userDatas;
            }
        }

        return null;
    }

//    @Override
//    public boolean deleteMovieFromFavourites(String emailId, String movieId) {
//        if (userDetailsRepository.findById(emailId).isPresent()) {
//            System.out.println("email" + emailId);
//            System.out.println("movieId" + movieId);
//            UserDetails userDatas = userDetailsRepository.findById(emailId).get();
//            List<Movie> favMovies = userDatas.getMovies();
//            for (int i = 0; i < favMovies.size(); i++) {
//                if (favMovies.get(i).getMovieId().equals(movieId)) {
//                    System.out.println(movieId);
//                    System.out.println(favMovies.get(i).getMovieId());
//                    favMovies.remove(i);
//                }
//            }
//            System.out.println(userDatas);
////            userDatas.setMovies(favMovies);
//            userDetailsRepository.save(userDatas);
//            return true;
//        }
//        return false;
//    }

    @Override
    public UserDetails getUserDetails(String emailId) {

        return userDetailsRepository.findById(emailId).get();
    }

    @Override
    public UserDetails registration(SignupData signupData) throws UserAlreadyExistedException, IOException {
        //building login appln user data
        if (userDetailsRepository.findById(signupData.getEmailId()).isEmpty()) {
            LoginDTO loginDTO = new LoginDTO(signupData.getEmailId(), signupData.getPassword(), "ROLE_USER");
            loginProxy.sendUserDtoToLoginAuthApp(loginDTO);
            System.out.println(loginDTO);
            //building movie app data
            UserDetails userDetails = new UserDetails(signupData.getEmailId(), signupData.getFirstName(), signupData.getLastName(),
                    signupData.getMobileNumber(),
                    signupData.getAge(), signupData.getAddress(), signupData.getMovies(), signupData.getResult(),
                    new Binary(BsonBinarySubType.BINARY, signupData.getProfilePic().getBytes()));


            System.out.println(userDetails);
            return userDetailsRepository.insert(userDetails);
        } else {
            throw new UserAlreadyExistedException();
        }
        }

    @Override
    public List<Movie> getSortedMoviesByAlphabet(String emailId) {
        if (userDetailsRepository.findById(emailId).isPresent()) {
            System.out.println(userDetailsRepository.findById(emailId));
            List<Movie> movies = movieRepository.findAll();
            Collections.sort(movies);
            for (Movie m : movies) {
                System.out.println(m.getMovieName());
            }
            return movies;
        } else {
            return null;
        }
    }

    @Override
    public List<UserDetails> getAllUserDetails() {
        userDetailsRepository.findAll();
        List<UserDetails> userList=userDetailsRepository.findAll();

        return userList;
    }









//    List<ResultsEntity> resultsEntityList=new ArrayList<ResultsEntity>();
//    List<Map<String, Object>> response = new ArrayList<>();
//
//    Map< String ,Object> userDetailsMap=new HashMap<>();
//        for(int i=0;i<= userList.size()-1;i++){
//        UserDetails userData=  userList.get(i);
//        System.out.println(userData);
//        for (int j=0;j<userData.getResult().size()-1;j++){
//            resultsEntityList.add(userData.getResult().get(j));
//
//        }
//        userDetailsMap.put("fav",resultsEntityList);
//        userDetailsMap.put("userDetails",userData);
//        response.add(userDetailsMap);
//
//        System.out.println(userDetailsMap);
//    }




















}