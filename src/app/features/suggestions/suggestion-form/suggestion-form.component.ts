import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {
myForm! : FormGroup;

ngOnInit(){
this.myForm= new FormGroup({
  title : new FormControl("",Validators.required),
  description: new FormControl("",[Validators.required,Validators.minLength(3)])
})
  }

}
