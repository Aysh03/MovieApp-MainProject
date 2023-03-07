package com.rabbitmqfeedback.consumer.controller;

import com.rabbitmqfeedback.consumer.reciever.FeedbackConsumer;
import com.rabbitmqfeedback.consumer.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
@RestController
@RequestMapping("/feedback-app-c1")
public class FeedbackController
{


    @Autowired
    FeedbackService feedbackService;

    @GetMapping("/get-feedback-data")
    public ResponseEntity<?> getFeedbackDataFromConsumer() {
        System.out.println("am in feefback");
               return new ResponseEntity<>(feedbackService.getFeedbackData( ), HttpStatus.OK);
    }
    @DeleteMapping("/delete-feedback/{feedbackId}")
    public  ResponseEntity<?> deleteFeedbackDataFromConsumer(@PathVariable  String feedbackId){
        System.out.println("*********");
        System.out.println(feedbackId);
        return  new ResponseEntity<>(feedbackService.deleteParticularFeedback(feedbackId),HttpStatus.OK);
    }

//    @PostMapping("/delete-feedback/{feedbackId}/{feedbackConsumer}")
//    public ResponseEntity<?> deleteItem(@PathVariable String feedbackId, @RequestBody FeedbackConsumer feedbackConsumer) {
//
//            return new ResponseEntity<>(feedbackService.deleteSingleFeedback(feedbackConsumer,feedbackId), HttpStatus.BAD_REQUEST);
//        }
    }


