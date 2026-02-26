import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Suggestion } from '../../../models/suggestion';
import { Router } from '@angular/router';
import { SuggestionService } from '../../../services/suggestion.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {
  constructor(private fb:FormBuilder, private _myRouter:Router, private sug:SuggestionService){}
myForm! : FormGroup;
myForm2! : FormGroup;
id : number = 0;
categories: string[] =
[ 'Infrastructure et bâtiments',
  'Technologie et services numériques',
   'Restauration et cafétéria',
   'Hygiène et environnement',
   'Transport et mobilité',
   'Activités et événements',
   'Sécurité', 'Communication interne', 'Accessibilité', 'Autre' ];
get title(){
  return this.myForm.get('title');
}
    onSubmit(){
  let s = new Suggestion();
  s.category=this.title?.value;
  console.log(this.myForm.value);
  this.sug.addSuggestion(this.myForm.value).subscribe(
    {
      next:res=>console.log(res),
      error:err=>console.log(err),
      complete:()=>this._myRouter.navigateByUrl("/suggestions")
    }
  );
  //this._myRouter.navigateByUrl("/suggestions");

  }
ngOnInit(){

this.myForm= new FormGroup({
  title : new FormControl("",[Validators.required,
    Validators.minLength(5),
    Validators.pattern("^[A-Z][a-zA-Z]*$")]),
  description: new FormControl("",[Validators.required,Validators.minLength(30)]),
 category: new FormControl("",[Validators.required]),
 date: new FormControl(new Date()),
 status: new FormControl("en attente")
})

this.myForm2= this.fb.group({
  title : ["",[Validators.required,
    Validators.minLength(5),
    Validators.pattern("^[A-Z][a-zA-Z]*$")]],
    description : ["", [Validators.required,
    Validators.minLength(30)]]
})
  }



}
