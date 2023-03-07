import { AbstractControl } from "@angular/forms";
export function ageValidation(fg:AbstractControl):{[key:string]:boolean}|null{
  if(fg.value<18 && fg.value<=100){
    return{'age':true}
  }
  return null;
}