import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue: any;
  movieArr: any[];
  totalLength: any;
  dataFlag: boolean;

  constructor(public searchService: SearchService) { 
    this.searchValue ='';
    this.movieArr = [];
    this.totalLength ='';
    this.dataFlag = false;
  }

  ngOnInit() {
    // this.search();
  }

  search(){
    if(this.searchValue ==''){
      alert('Please enter the search data');
    }else{
      this.searchService.getSearchData(this.searchValue).subscribe(data => {
        console.log(data)
        if(data['Error'] == "Movie not found!"){
          this.dataFlag = false;
          document.getElementById('alert-card').innerHTML = 'Movie not found!'
        }else{
          this.dataFlag = true;
          this.movieArr = data['Search'];
          this.totalLength = data['totalResults'];
          console.log(this.movieArr);
        }

      },
        err => {
          console.log(err);
        })
    }

  }

}
