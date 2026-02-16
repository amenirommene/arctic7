import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent {
id! : number ;
  constructor(private ac:ActivatedRoute){
     console.log("je suis constructor");
  }

  ngOnInit(){
    console.log("je suis ngOninit");
   //this.id=this.ac.snapshot.params['id'];
   this.ac.paramMap.subscribe(res=>this.id=Number(res.get('id')));
   //this.ac.params.subscribe(res=>this.id=Number(res['id']));
  }

}
