import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { DataserviceService } from '../services/dataservice.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public auth: AuthServiceService, private router: Router,private userService:UserServiceService,private dataService:DataserviceService) {}
  ngOnInit(): void 
  {

  }

  
  logout() {
    this.auth.loggingOut();
}
profpic:string="";

 searchText:string="";

searchedText()
{
 this.dataService.searchedtext=this.searchText;
}



// onSearchTextEntered(searchValue:string){
//   this.searchText=searchValue;
//   console.log(this.searchText);
  

}





