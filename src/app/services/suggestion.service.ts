import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuggestionsModule } from '../features/suggestions/suggestions.module';
import { Observable } from 'rxjs';
import { Suggestion } from '../models/suggestion';

@Injectable({
  providedIn:'root'
})
export class SuggestionService {
  url:string = "http://localhost:3000/suggestions";
  constructor(private _http:HttpClient) { }

  getSuggestionsFromBackend():Observable<Suggestion[]>{
    return this._http.get<Suggestion[]>(this.url);
  }
  //est ce que data retournée = Suggestion est correcte ?
  addSuggestion(s:Suggestion):Observable<Suggestion>{
    return this._http.post<Suggestion>(this.url,s);
  }
  updateSuggestion(id:number, s:Suggestion):Observable<Suggestion>{
    return this._http.put<Suggestion>(this.url+"/"+id,s);
  }
  deleteSuggestion(id:number):Observable<Suggestion>{
     return this._http.delete<Suggestion>(this.url+"/"+id);
  }

  getListSuggestions(){
    return [
{
id: 1,
title: 'Organiser une journée team building',
description: "Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.",
category: 'Événements',
date: new Date('2025-01-20'), status: 'acceptee',
nbLikes:10
},
{
id: 2,
title: 'Améliorer le système de réservation',
description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
category: 'Technologie',
date: new Date('2025-01-15'), status: 'refusee',
nbLikes:0
},
{
id: 3,
title: 'Créer un système de récompenses',
description: "Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.",
category: 'Ressources Humaines', date: new Date('2025-01-25'), status: 'refusee',
nbLikes:0
},
{
id: 4,
title: "Moderniser l'interface utilisateur",
description: "Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.",
category: 'Technologie',
date: new Date('2025-01-30'), status: 'en_attente',
nbLikes:0
}
]
  }
}
