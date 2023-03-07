import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


// @Component({
//   selector: 'app-file-upload',
//   templateUrl: './file-upload.component.html',
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: FileUploadComponent,
//       multi: true
//     }
//   ],
//   styleUrls: ['./file-upload.component.css']
// })
// export class FileUploadComponent implements ControlValueAccessor {

//   constructor( private host: ElementRef<HTMLInputElement> ) {
   
//     }
//   // writeValue(obj: any): void {
//   //   throw new Error('Method not implemented.');
//   // }
//   // registerOnChange(fn: any): void {
//   //   throw new Error('Method not implemented.');
//   // }
//   // registerOnTouched(fn: any): void {
//   //   throw new Error('Method not implemented.');
//   // }
//   // setDisabledState?(isDisabled: boolean): void {
//   //   throw new Error('Method not implemented.');
//   // }
 
//   @Input() progress:any;
//   //onChange!: Function;
//   onChange!: (value: any) => ;
//  file: File | null = null;

//   writeValue( value: null ) {
//     // clear file input
//     this.host.nativeElement.value = '';
//     this.file = null;
//   }

//   registerOnChange( fn: Function ) {
//     this.onChange = fn;
//   }

//   registerOnTouched( fn: Function ) {
//   }
 


//   @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
//     const file = event && event.item(0);
//     this.onChange!(file);
//     this.file = file; {
//     }
//     // constructor( private host: ElementRef<HTMLInputElement> ) {
//     // }

      

// }
// }

