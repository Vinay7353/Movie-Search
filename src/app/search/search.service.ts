import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http:HttpClient
  ) { }

  getSearchData(value){
 
    return this.http.get('http://www.omdbapi.com/?apikey=4897472c&s='+value);
  }
}
