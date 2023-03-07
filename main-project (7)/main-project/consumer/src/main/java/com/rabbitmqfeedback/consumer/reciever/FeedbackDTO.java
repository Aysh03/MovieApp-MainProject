package com.rabbitmqfeedback.consumer.reciever;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FeedbackDTO {
    private String feedbackId;
    private Date feedbackDate;
    private String experience;
    private String feedbackMessage;
}
