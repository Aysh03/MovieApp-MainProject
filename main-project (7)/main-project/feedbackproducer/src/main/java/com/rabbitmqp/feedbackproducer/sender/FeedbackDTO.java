package com.rabbitmqp.feedbackproducer.sender;

import com.fasterxml.jackson.databind.DatabindException;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;
import java.util.List;

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


