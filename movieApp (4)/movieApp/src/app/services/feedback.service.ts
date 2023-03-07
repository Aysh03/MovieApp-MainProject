import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private client:HttpClient) { }

  feedbackProducerBaseUrl = 'http://localhost:8111/';
  
  // feedbackProducerBaseUrl = 'http://localhost:9005/';
  

  sendFeedbackData(feedbackData:any){
      
    return this.client.post( this.feedbackProducerBaseUrl+'feedback-app/send-feedback-to-consumer',feedbackData);

  }

  getFeedbackDataFromConsumer(){
    console.log('feedback service');
    
    return this.client.get(this.feedbackProducerBaseUrl+'feedback-app-c1/get-feedback-data');
  }

// deleteFeedbackFromConsumer(feedbackId:any, feedbackUserdata:any){
//   console.log('am in feedback service'+feedbackUserdata+feedbackId);
  
//   return this.client.post(this.feedbackProducerBaseUrl+'feedback-app-c1/delete-feedback/'+feedbackId+feedbackUserdata,feedbackUserdata);
// }

deleteFeedbackFromConsumer(feedbackId:any){
  console.log('am in feedback service'+feedbackId);
  
  return this.client.delete(this.feedbackProducerBaseUrl+'feedback-app-c1/delete-feedback/'+feedbackId);

}
}