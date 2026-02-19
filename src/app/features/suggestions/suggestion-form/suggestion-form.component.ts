import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {
myForm! : FormGroup;
id : string = '1';
categories: string[] =
[ 'Infrastructure et bâtiments',
  'Technologie et services numériques',
   'Restauration et cafétéria',
   'Hygiène et environnement',
   'Transport et mobilité',
   'Activités et événements',
   'Sécurité', 'Communication interne', 'Accessibilité', 'Autre' ];

    onSubmit(){

  }
ngOnInit(){
this.myForm= new FormGroup({
  title : new FormControl("",Validators.required),
  description: new FormControl("",[Validators.required,Validators.minLength(3)])
})
  }



}
