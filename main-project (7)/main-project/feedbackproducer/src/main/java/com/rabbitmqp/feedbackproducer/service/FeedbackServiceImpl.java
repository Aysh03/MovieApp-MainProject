package com.rabbitmqp.feedbackproducer.service;
import com.rabbitmqp.feedbackproducer.repository.FeedbackRespository;

import com.rabbitmqp.feedbackproducer.sender.Feedback;
import com.rabbitmqp.feedbackproducer.sender.FeedbackDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    FeedbackRespository feedbackRespository;

    @Override
    public Feedback sendFeedbackDataToConsumer(Feedback feedback) {

            FeedbackDTO feedbackDTO = new FeedbackDTO(feedback.getFeedbackId(), feedback.getFeedbackDate(), feedback.getExperience(), feedback.getFeedbackMessage());
            return feedbackRespository.insert(feedback);

        }
    }

