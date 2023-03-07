package com.rabbitmqfeedback.consumer.service;
import com.rabbitmqfeedback.consumer.reciever.FeedbackConsumer;

import java.util.List;


public interface FeedbackService
{
    public abstract FeedbackConsumer addFeedBack(FeedbackConsumer feedback);

  public  abstract  List<FeedbackConsumer> getFeedbackData();

//    public abstract  boolean deleteParticularFeedback(String feedbackId);
public abstract  boolean deleteParticularFeedback(String feedbackId);


//public  abstract  FeedbackConsumer deleteSingleFeedback(FeedbackConsumer feedbackConsumer, String FeedbackId);

}
