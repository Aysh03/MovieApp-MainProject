package com.rabbitmqp.feedbackproducer.service;

import com.rabbitmqp.feedbackproducer.sender.Feedback;

public interface FeedbackService
{
    public abstract Feedback sendFeedbackDataToConsumer(Feedback feedback);
}
