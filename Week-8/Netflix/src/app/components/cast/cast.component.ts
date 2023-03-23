import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  @Input() member: any 

  constructor(){}

  ngOnInit(): void {
      
  }

  getLink(link: string): string{
    return 'https://image.tmdb.org/t/p/original/' + link
  }

}
