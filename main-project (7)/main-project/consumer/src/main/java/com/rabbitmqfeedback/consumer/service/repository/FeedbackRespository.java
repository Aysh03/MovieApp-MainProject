package com.rabbitmqfeedback.consumer.service.repository;

import com.rabbitmqfeedback.consumer.reciever.FeedbackConsumer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedbackRespository extends MongoRepository <FeedbackConsumer,String>
{

}
