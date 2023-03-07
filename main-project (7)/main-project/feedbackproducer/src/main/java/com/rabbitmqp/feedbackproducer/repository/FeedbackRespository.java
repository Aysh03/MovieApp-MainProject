package com.rabbitmqp.feedbackproducer.repository;

import com.rabbitmqp.feedbackproducer.sender.Feedback;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedbackRespository extends MongoRepository <Feedback,String>
{

}
