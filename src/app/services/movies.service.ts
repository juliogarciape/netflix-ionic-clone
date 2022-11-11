import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { Movies, Result } from '../interfaces';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getTopHeadLines():Observable<Result[]>{
    return this.http.get<Movies>('https://api.themoviedb.org/3/discover/movie?language=es-MX&page=1',{
      params:{
        api_key: apiKey
      }
    }).pipe(
      map(res => res['results'])
    )
  }

}