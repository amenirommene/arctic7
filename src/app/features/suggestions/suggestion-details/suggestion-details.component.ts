import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuggestionService } from '../../../services/suggestion.service';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent {
id! : number ;
  constructor(private ac:ActivatedRoute, private monSugService:SuggestionService){
     console.log("je suis constructor");
  }

  sug:Suggestion = new Suggestion();

  ngOnInit(){
    console.log("je suis ngOninit");
   //this.id=this.ac.snapshot.params['id'];
   this.ac.paramMap.subscribe(res=>{this.id=Number(res.get('id'));
    this.monSugService.getSuggestionsFromBackendById(this.id).subscribe(res=>this.sug=res.suggestion)});

   //this.ac.params.subscribe(res=>this.id=Number(res['id']));
  }

}
