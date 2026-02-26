import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../services/suggestion.service';

@Component({
  selector: 'app-list-suggestions',
  templateUrl: './list-suggestions.component.html',
  styleUrl: './list-suggestions.component.css'
 // providers: [SuggestionService] => disponible uniquement pour ce composant

})
export class ListSuggestionsComponent {

constructor(private sugService:SuggestionService){}
ngOnInit(){
 // this.suggestions = this.sugService.getListSuggestions();
 this.sugService.getSuggestionsFromBackend().subscribe(
  res=>this.suggestions=res);
}
searchTearm : string="";
placeHolderText="Rechercher une suggestion"
suggestions: Suggestion[] = [];
like(sug:Suggestion){
sug.nbLikes ++;
}
favoris : Suggestion[]=[];
addToFavoris(su:Suggestion){
  this.favoris.push(su);
  console.log(this.favoris);
}
getClassCss(status:string){
  if (status == 'acceptee'){
    return "status-accepted"
  }
  else if (status == 'refusee'){
    return "status-refused"
  }
  else{
    return "status-pending"
  }
}

}
