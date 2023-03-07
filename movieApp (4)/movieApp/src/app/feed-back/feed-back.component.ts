import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { NotifierServiceService } from '../services/notifier-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit{

constructor( private feedbackservice: FeedbackService,private userservice:UserServiceService,private route:Router,private toast:NotifierServiceService){}
  ngOnInit() {
    this.getUserDetails();
  }


  feedBackForm = new FormGroup({
    'experience': new FormControl(),
    'feedbackMessage': new FormControl()
  });



get experience() {
    return this.feedBackForm.get('experience')
  }
  get feedbackMessage() {
    return this.feedBackForm.get('feedbackMessage')
  }
  feedbackdata: any
  sendFeedbackData(){
        this.feedbackservice.sendFeedbackData(this.feedBackForm.value).subscribe({
        next: (result: any) => {
          this.feedbackdata = result
          this.toast.showSuccess('You have successfully submitted the feedback!','Thank you!');
          console.log(this.feedbackdata);
          this.feedBackForm.reset();
          setTimeout(() => {
            setTimeout(() => {
             
              this.route.navigateByUrl('/userView')
            });
          }, 4000); 
         
        },
      })
    }

    firstNamee!: any;
    userdat:any;
    profilePicdata:any;
    getUserDetails() {
      this.userservice.getUserDetails().subscribe({
        next: (result) => {
          this.userdat = result;
          console.log(this.userdat + 'in the userbnoard ');
          this.profilePicdata = this.userdat.profilePic.data;
          this.firstNamee = this.userdat.firstName;
          console.log(this.firstNamee);
        },
      });
    }

}

