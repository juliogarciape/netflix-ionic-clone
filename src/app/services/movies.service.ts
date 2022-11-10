import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getTopHeadLines(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=es-MX&page=1',{
      params:{
        api_key: apiKey
      }
    }).pipe(
      map(res => res['results'])
    )
  }

}