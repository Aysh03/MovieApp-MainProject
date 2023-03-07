package com.rabbitmqfeedback.consumer.service;
import com.rabbitmqfeedback.consumer.reciever.FeedbackConsumer;
import com.rabbitmqfeedback.consumer.service.repository.FeedbackRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackServiceImpl implements FeedbackService {
    @Autowired
    FeedbackRespository feedbackRespository;

    @Override
    public FeedbackConsumer addFeedBack(FeedbackConsumer feedbackConsumer) {
        System.out.println(feedbackConsumer);
        return feedbackRespository.save(feedbackConsumer);
    }

    @Override
    public List<FeedbackConsumer> getFeedbackData() {
        return feedbackRespository.findAll();
    }

//    @Override
//    public FeedbackConsumer deleteSingleFeedback(String FeedbackId) {
//        if(feedbackRespository.findById(FeedbackId).isPresent())
//        {
//            FeedbackConsumer feedbackConsumer
//        }
//
//        return null;
//    }


    public boolean deleteParticularFeedback(String feedbackId) {
        if (feedbackRespository.findById(feedbackId).isPresent()) {
            feedbackRespository.findById(feedbackId).get();
            System.out.println( feedbackRespository.findById(feedbackId).get());
            feedbackRespository.deleteById(feedbackId);
            return true;
        } else {
            return false;
        }
    }

//    @Override
//    public FeedbackConsumer deleteSingleFeedback(FeedbackConsumer feedbackConsumer, String FeedbackId) {
//
//        if (feedbackRespository.findById(FeedbackId).isPresent()) {
//
//            List<FeedbackConsumer> feedbackConsumerList = feedbackRespository.findAll();
//            for (int i = 0; i < feedbackConsumerList.size(); i++) {
//                if (feedbackConsumerList.get(i).getFeedbackId().equals(FeedbackId)) {
//                    FeedbackConsumer feedbackConsumer1 = feedbackConsumerList.remove(i);
//                    feedbackConsumer1.setFeedbackId(feedbackConsumer1.getFeedbackId());
//                    feedbackConsumer1.setFeedbackDate(feedbackConsumer1.getFeedbackDate());
//                    feedbackConsumer1.setFeedbackMessage(feedbackConsumer1.getFeedbackMessage());
//
//                    feedbackConsumer1.setExperience(feedbackConsumer1.getExperience());
//                    return feedbackRespository.save(feedbackConsumer1);
//
//
//                }
//
//            }
//        } else {
//            return null;
//        }
//
//return null;
//    }
}