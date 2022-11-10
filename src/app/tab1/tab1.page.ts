import { Component,OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public movies:any=[];

  constructor(private movieService: MoviesService) {}

  ngOnInit(){
    this.movieService.getTopHeadLines()
    .subscribe(data => {
      this.movies.push(...data);
      console.log(data);
    })
  }

}
