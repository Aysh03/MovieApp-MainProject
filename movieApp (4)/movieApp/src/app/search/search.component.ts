import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchItem!: string;
  constructor(
    private httpClient: HttpClient,
    private dataService: DataserviceService
  ) {}
  ngOnInit(): void {
    // this.onSearchTextChanged();
  }

  // @Output()
  // searchTextChanged:EventEmitter<string>=new EventEmitter<string>();

  // // need to include the dataservice path inorder to fetch

  // onSearchTextChanged() {
  // this.dataService.searchMovie(this.enteredSearchValue).subscribe({
  //   next:(res)=>
  //   {
  //     console.log(this.dataService.searchMovie(this.enteredSearchValue));
  //   }
  // })

  //   console.log(this.enteredSearchValue);

  // }


  // @Input()
  // inputSearch: string = '';


  enteredSearchValue: string = '';

  @Output()
  searchText: EventEmitter<any> = new EventEmitter();

  onSearchTextChanged(searchval:any) {
    console.log('on search nmethid');
    
    console.log(this.searchText);

    this.searchText.emit(searchval);
    console.log(searchval);
    console.log(this.searchText);
  }





}
