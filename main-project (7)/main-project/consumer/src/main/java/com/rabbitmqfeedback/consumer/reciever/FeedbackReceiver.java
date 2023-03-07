package com.rabbitmqfeedback.consumer.reciever;


import com.rabbitmqfeedback.consumer.configuration.MQConfig;
import com.rabbitmqfeedback.consumer.service.FeedbackService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FeedbackReceiver {
//    @RabbitListener(queues = MQConfig.QUEUE)
//    public void listener(FeedbackDTO feedbackDTO) {
//        System.out.println("This is data's of Feedback Queue");
//        Feedback feedback = new Feedback
//                (feedbackDTO.getFeedbackId(),
//                        feedbackDTO.getExperience(),
//                        feedbackDTO.getFeedbackMessage(),
//                        feedbackDTO.getFeedbackDate());
//
//        System.out.println(feedback);
////    System.out.println(feedbackDTO);
//    }

@Autowired
    FeedbackService feedbackService;


    @RabbitListener(queues = MQConfig.QUEUE)
    public void listener(FeedbackDTO feedbackDTO) {

        FeedbackConsumer feedbackConsumer=new FeedbackConsumer(feedbackDTO.getFeedbackId(),feedbackDTO.getFeedbackDate()
        ,feedbackDTO.getExperience(),feedbackDTO.getFeedbackMessage());

        feedbackService.addFeedBack(feedbackConsumer);
    }
}
