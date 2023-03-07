package com.rabbitmqfeedback.consumer.reciever;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document
public class FeedbackConsumer {
    @Id
    private String feedbackId;
    private Date feedbackDate;
    private String experience;
    private String feedbackMessage;

}
