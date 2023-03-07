import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierServiceService {

  constructor(private toaster:ToastrService) { }

showSuccess(title:any,message:any)
{
  this.toaster.success(message,title,{
easing:'ease-in',
easeTime:1000

  })
}

showError(title:any,message:any)
{
  this.toaster.error(message,title,{
easing:'ease-in',
easeTime:1000

  })
}


showWarning(title:any,message:any)
{
  this.toaster.warning(message,title,{
easing:'ease-in',
easeTime:1000
  })
}

showInfo(title:any,message:any)
{
  this.toaster.info(message,title,{
easing:'ease-in',
easeTime:1000
  })
}















}
