package com.rabbitmqp.feedbackproducer.controller;
import com.rabbitmqp.feedbackproducer.sender.Feedback;
import com.rabbitmqp.feedbackproducer.sender.MQConfig;
import com.rabbitmqp.feedbackproducer.service.FeedbackService;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Date;
import java.util.UUID;
@RestController
@RequestMapping("/feedback-app")
public class FeedbackController {
    @Autowired
    RabbitTemplate rabbitTemplate;

    @Autowired
    FeedbackService feedbackService;

    @PostMapping("/send-feedback-to-consumer")
    public ResponseEntity<?> sendFeedbackDataToConsumer(@RequestBody Feedback feedback) {

        feedback.setFeedbackId(UUID.randomUUID().toString());
        feedback.setFeedbackDate(new Date());
        rabbitTemplate.convertAndSend(MQConfig.EXCHANGE, MQConfig.ROUTING_KEY, feedback);

        return new ResponseEntity<>(feedbackService.sendFeedbackDataToConsumer(feedback), HttpStatus.OK);
    }


//    @RestController
//    public class Microservice1Controller {
//
//        @Autowired
//        private RestTemplate restTemplate;
//
//        @GetMapping("/getDataFromMicroservice2")
//        public String getDataFromMicroservice2() {
//            return restTemplate.getForObject("http://microservice2/data", String.class);
//        }


}
